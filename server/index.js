const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserModel = require('./models/Users');



app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/crud')

app.get('/', (req, res) => {
    UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));

})

app.get('/getUser/:id', (req, res) => {
    UserModel.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
})

app.put('/updateUser/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {name:req.body.name, email:req.body.email, age:req.body.age} )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

app.delete('/deleteUser/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
    .then( result => res.json({message: "User deleted successfully"}))
    .catch((err) => res.json(err));
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
})




app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
})