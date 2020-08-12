/* Fonte para guardar inserção de dados */

module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) { /* Parametros: O banco de dados e as estruturas que serão inseridas na tabela */
    // Inserir dados na table de teachers
    /* O await faz aguardar uma resposta antes de partir pra próxima linha. Isso trava o programa em caso de erros! 
    (É necessário colocar o async antes da chamada da função. Caso contrário, o await não é lido!)*/
    //A crase é necessária pois permite quebrar linhas, coisa que a aspas simples não permite
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );        
    `)

    const proffy_id = insertedProffy.lastID /* Pega o ultimo ID inserido */

    // inserir dados na tabela de classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );        
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    }) //O map é um dos loops do array, natural do JS. Ele é igual ao foreach, só que o MAP possui um return (Como se fossem procedures e functions)
    // Consultar os dados inseridos

    await Promise.all(insertedAllClassScheduleValues) /* Irá aguardar todos os inserts de class_schedule */
}