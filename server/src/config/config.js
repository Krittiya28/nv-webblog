module.exports ={
    port: 8081,
    db:{
        database: process.env.DB_NAME || 'nvWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        Options:{
            dialect: process.env.DB_pass || 'sqlite',
            storage:'./nvwebblog-db.sqlite'


        }
    }
}