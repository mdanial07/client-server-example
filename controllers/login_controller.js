const Login = require('../models/Login');

module.exports = {
    create(req, res, next) {
        const loginProps = req.body;
        Login.create(loginProps)
            .then(login => res.send(login))
            .catch(next)
    }
}