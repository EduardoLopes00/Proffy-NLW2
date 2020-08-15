const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageSuccess
} = require ('./pages')

//Configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Inicio e configuração do Servidor
server
// receber os dados do reqbody

.use(express.urlencoded({extended: true}))
// Configurar arquivos estáriocs (css, scripts, imagens)
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success-screen", pageSuccess)
.post("/give-classes", saveClasses)

//Start do servidor
.listen(5000)
