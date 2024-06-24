const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    app.post('/user',UserController.create)
    app.put('/user/:userId',UserController.put) //edit user,suspend, active
    app.delete('/user/:userId',UserController.remove)//delete user
    app.get('/user/:userId',UserController.show) //get user by id
    app.get('/users',UserController.index) //get all user
}