const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const proffys = [
    {
        name: "Luis",
        avatar: "https://avatars0.githubusercontent.com/u/63026446?s=400&u=d4df2c7578ca2bd988373eddfcf2796dd28f51ec&v=4",
        whatsapp: "998877662",
        bio: "O cara certo",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [900]
    },

    {
        name: "Salomex",
        avatar: "https://avatars2.githubusercontent.com/u/12191590?s=460&u=7368c5045c88330a99973ec648ef05e3f449cab7&v=4",
        whatsapp: "22222222",
        bio: "O cara",
        subject: "Física",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [900]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

function getSubjects(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClass(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length !=0

    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)

.listen(5500)