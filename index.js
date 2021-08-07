const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')

//config
 // template engine
  app.engine('handlebars',handlebars({defaultLayout:'main'}))
  app.set('view engine', 'handlebars')
  //database connection
  const sequelize = new Sequelize('express','root','1234',{
    host:"localhost",
    dialect:'mysql'
  })
  // authenticating connection
  sequelize.authenticate().then(function(){
    console.log("Database ok")
  }).catch(function(erro){
    console.log('Database erro: '+erro)
  })

//routes
app.get('/',function(req,res){
   res.sendFile(__dirname+'/html/index.html')
})
app.get('/cad',function(req,res){
  res.render('formulario')
})
app.post('/addcad',function(req,res){
  res.send('postagem adicionada!')
})
//port express
app.listen(8081, function() {
  console.log("Server Ok")
})
