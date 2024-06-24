let express = require('express')
let bodyPerser = require('body-parser')
const {sequelize}= require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyPerser.json())
app.use(bodyPerser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function (req,res){
    res.send('hello nodejs server')
})
app.get('/hello/:person', function (req, res){
    console.log('hello -'+req.params.person)

})
app.post('/hello',function (req, res){
    res.send('OK you post -'+ req.body.name)
})

let port = 8081

sequelize.sync({force: false}).then(()=>{
    app.listen(port, function(){
        console.log('Server runnng on '+ port)
    })
})
