const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LoginSchema = new Schema({
    login: {
        type: String,
    },
    password: {
        type: String,
    },
},
    { timestamps: true }
)

const Login = mongoose.model('login', LoginSchema);

module.exports = Login;