
const express = require('express')
const usersRouters = require('./routers/users')
//const servicesRouters = require('./routers/service')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouters)
//app.use('/services', servicesRouters)


app.get('/', (req, res) => {
    res.json({
        "message": 'Hello world'
    })
})

module.exports = app