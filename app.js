const express = require('express')

const path = require('path')

//Express init
const app = express()
    //Env variables import
require('dotenv').config()
    //for Cors
const cors = require('cors');
const db = require('./db')
app.use(cors());
const auth = require('./config/auth')


app.use(express.json({ extended: true }))



// Cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser());


//frontend
app.use('/', require('./routes/frontend_routes'))

// backend
app.use('/api/users', require('./routes/index'))
app.use('/api/user', auth, require('./routes/users'))
app.use('/api/routes', require('./routes/routes'))
app.use('/api/news', require('./routes/news'))
app.use('/api/stops', require('./routes/stops'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port " + PORT));