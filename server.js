require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express()
const mongo = require('mongoose')

app.use(cors({
    origin: '*'
}));

mongo.connect(process.env.DATABASE_URL)
const db = mongo.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database conectada'))
app.use(express.json())

const suscribersRouter = require('./routes/suscribers')
app.use('/pelis', suscribersRouter)

app.listen(9999, () => console.log('Server iniciado')) 