const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserModel = require('./models/Users');



app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/crud')

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
})




app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
})