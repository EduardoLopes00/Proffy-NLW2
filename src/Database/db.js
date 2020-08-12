const Database = require('sqlite-async') /* Importando o database */

function execute(db) {
    // Criar as tabelas do ban co de dados
    return db.exec( /* Instrução para executar um código do banco de dados */
        `CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );    /* As instruções de banco são passadas entre crazes! (Não é apóstrofos!) */

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );    

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );`
    )
}

/* O module.exports diz que o arquivo que ele recebeu será visivel para qualquer arquivo que chamar o db.js, Ele vai com o apelido que 
foi pasado por parametro para sua criação dentro da function "execute" */
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) /* Abrindo o database e executando a função logo em seguida  */