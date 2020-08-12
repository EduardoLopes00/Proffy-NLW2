const proffys = [
    {
     name: "Eduardo Lopes"
    ,avatar: "https://avatars0.githubusercontent.com/u/60946104?s=460&u=9f144dbb8a80a06102abc957f1ce8398d0bcb55b&v=4"
    ,whatsapp: "89923064656"
    ,bio: "Percursor em tudo que envolve modelagem e programação de Banco de dados. Apaixonado por modelar os dados e a forma como eles irão se comportar dentro de uma aplicação. Acredito no conceito de que somente tempo e prática criam um banco de dados inteligente e funcional"
    ,subject: "Banco de dados"
    ,cost: "15"
    ,weekday: [
        0
    ]
    ,time_from: [720]
    ,time_to: [1220] 
    },

    {
     name: "Rafael Lopes"
    ,avatar: "https://avatars0.githubusercontent.com/u/60946104?s=460&u=9f144dbb8a80a06102abc957f1ce8398d0bcb55b&v=4"
    ,whatsapp: "89923064656"
    ,bio: "Percursor em tudo que envolve modelagem e programação de Banco de dados. <br><br>Apaixonado por modelar os dados e a forma como eles irão se comportar dentro de uma aplicação. Acredito no conceito de que somente tempo e prática criam um banco de dados inteligente e funcional"
    ,subject: "Banco de dados"
    ,cost: "15"
    ,weekday: [
        0
    ]
    ,time_from: [720]
    ,time_to: [1220] 
    }
]

//Dados
const subjects = [
    "Artes",
    "Biologia",    
    "Ciências",
    "Educação física",
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
    "Sábado",    
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    
    return subjects[arrayPosition]
}