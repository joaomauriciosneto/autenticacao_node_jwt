require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()
const porta = 3333

app.use(express.json())
app.use(routes)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.set("strictQuery", true)

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.du4fqip.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Conectou ao banco!');
}).catch((err) => console.log(err))

app.listen(porta, () => {
    console.log(`Server running at port: ${porta}`);
})