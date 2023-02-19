require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const porta = 3333

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Bem vindo!'
    })
})

app.listen(porta, () => {
    console.log(`Server running at port: ${porta}`);
})