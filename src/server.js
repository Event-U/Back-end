
const express = require('express')
const usersRouters = require('./routers/users')
const servicesRouters = require('./routers/service')
const companyBussineRouters = require('./routers/companyBussine')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouters)
app.use('/services', servicesRouters)
app.use('/companyBussine', companyBussineRouters)


app.get('/', (req, res) => {
    res.json({
        "message": 'Api Event-u OK'
    })
})

module.exports = app