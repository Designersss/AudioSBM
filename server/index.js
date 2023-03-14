require('dotenv').config()
const express = require('express')
const models = require('./models/models')
const sequelize = require('./bd')
const cors = require('cors')
const router = require('./routes/index')
PORT = process.env.PORT || 7000


const app = express()
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Стартовал порт ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()