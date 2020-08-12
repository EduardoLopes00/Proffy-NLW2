/* Criado um outro arquivo para continaur a codificação do banco de dados. O arquivo DB serve apenas para criar as tabelas e o banco de dados */
const Database = require('./db') /* Importando o DB */
const createProffy = require('./createProffy')

Database.then(async (db) =>{ /* o db passado é o proprio objeto que está chamando */
    proffyValue = {
        name: 'Eduardo Lopes',
        avatar: 'https://avatars0.githubusercontent.com/u/60946104?s=460&u=9f144dbb8a80a06102abc957f1ce8398d0bcb55b&v=4',
        whatsapp: '4964641615',
        bio: 'Instrutor de Eduacação Fisica'
    }

    classValue = {
        subject: "Banco de dados",
        cost: "15"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados inseridos

    // todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys") /* Melhor criar uma váriavel para cada comando SQL */

    // console.log(selectedProffys)

    // Consultar as classes de um determinado professor 
    // e trazer junto os dados do profesor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes on (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
     console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima!

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"

`)

    // console.log(selectClassesSchedule)
}) 

