const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {

    proffyValue = {
        name: "Luis",
        avatar: "https://avatars0.githubusercontent.com/u/63026446?s=400&u=d4df2c7578ca2bd988373eddfcf2796dd28f51ec&v=4",
        whatsapp: "998877662",
        bio: "O cara certo",
    }

    classValue = {
        subject: "Química",
        cost: "20",
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

    //Criar o banco e popular as tabelas
 //   await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //Consultar os dados dos professores
 //   await db.all("SELECT * FROM proffys")

    //Consultar os dados das classes e professores

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffy.id) 
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassesAndProffys)
})