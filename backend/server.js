const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000;

connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/main', require('./routes/goalRoute'))
app.use('/api/users', require('./routes/userRoute'))
app.use(errorHandler)

app.listen(port, ()=> console.log(`server runs on ${port}`))

