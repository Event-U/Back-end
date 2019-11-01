
const express = require('express')
const usersRouters = require('./routers/users')
const servicesRouters = require('./routers/service')
const companyBussineRouters = require('./routers/companyBussine')
const eventRouters = require('./routers/event')
const catServicesRouters = require('./routers/catServices')
const needRouters = require('./routers/need')
const addressRouters = require('./routers/address')
const investmentRouters = require('./routers/investment')
const quotationRouters = require('./routers/quotation')


const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouters)
app.use('/services', servicesRouters)
app.use('/companyBussine', companyBussineRouters)
app.use('/event', eventRouters)
app.use('/catServices', catServicesRouters)
app.use('/need', needRouters)
app.use('/address', addressRouters)
app.use('/investment', investmentRouters)
app.use('/quotation', quotationRouters)


app.get('/', (req, res) => {
    res.json({
        "message": 'Api Event-u OK'
    })
})

module.exports = app