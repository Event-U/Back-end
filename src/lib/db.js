const mongoose = require('mongoose')

// Process es una variabe global en node.js guarda toda la información de un proceso. 
//Accedemos a las variables globales. 
const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD
} = process.env

// Agregamos la uri que viene en mongodb 
const uri = `mongodb+srv://Irving:123456abc@cuarta-gen-h8sn4.mongodb.net/Event-u`

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Event-U (la colección)
// Documents: Users