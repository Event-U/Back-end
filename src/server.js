const express = require('express')
const userRouters = require('./routers/user')
const servicesRouters = require('./routers/service')
const eventRouters = require('./routers/event')
const categoryRouters = require('./routers/category')
const needRouters = require('./routers/need')
const addressRouters = require('./routers/address')
const quotationRouters = require('./routers/quotation')
const boardRouters = require('./routers/board')
const columnRouters = require('./routers/column')
const taskRouters = require('./routers/task')


const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', userRouters)
app.use('/services', servicesRouters)
app.use('/event', eventRouters)
app.use('/category', categoryRouters)
app.use('/need', needRouters)
app.use('/address', addressRouters)
app.use('/quotation', quotationRouters)
app.use('/board', boardRouters)
app.use('/column', columnRouters)
app.use('/task', taskRouters)

app.get('/', (req, res) => {
    res.json({
        "message": 'Api Event-u OK'
    })
})

module.exports = app