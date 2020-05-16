const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://joebrashear:MerryChristmas@cluster0-k53pf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true, 
    useUnifiedTopology: true
}, () => {
    console.log('sucessfully connected to database');
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(5000, () => {
    console.log('express server started');
});