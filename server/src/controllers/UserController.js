const { User } = require('../models')

module.exports = {
    //get all user
    async index (req, res){
        try {
            const users =await User.findAll()
            res.send(users)
        }catch (err){
            res.status(500).send({
                error:'The users information was incorrect'
            })
        }
    //create user
    create (req, res){
        res.send('ทำการสร้างผู้ใช้งาน: '+ JSON.stringify(req.body))
    },
    //edit user, suspoend, active
    put (req, res){
        res.send('ทำการแก้ไขผู้ใช้งาน: '+ req.params. userId + ' : '+ JSON.stringify(req.body))
    },
    //delete user
    remove (req, res){
        res.send('ทำการลบผู้ใช้งาน: '+ req.params.userId + JSON.stringify(req.body))
    },

    //get user by id
    show (req, res){
        res.send('ดูข้อมูลผู้ใช้งาน: '+ req.params.userId)
    }

}

