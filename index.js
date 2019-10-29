require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')
const listenServer = function() {
    return new Promise((resolve, reject) => {
        server.listen(8080, () => {
            resolve()
        })
    })
}

async function main() {
    await dbConnect()
    console.log('Database connected')
    await listenServer()
    console.log('SERVER LISTENING on port ')
}

main()
    .then(() => {
        console.log('api ready')
    })
    .catch(error => {
        console.error('ERROR', error)
    })