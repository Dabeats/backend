const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

/*app.get('/', (req, res) => {
  res.send('<h1>Mi primera pagina</h1>')
})*/

app.post('/register', (req, res) => {
  let name =req.body.name;
  let email= req.body.email;
  let password= req.body.password;
  let id= req.body.id;
  let number= req.body.number;
  res.send(`su nombre es: ${name} su password es : ${password} su email es : ${email} su id es : ${id} su numero es : ${number}`)
})

app.post('/login', (req, res) => {
  
  let password= req.body.password;
  let email= req.body.email;
  res.send(`exitoso el inicio de sesion  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})