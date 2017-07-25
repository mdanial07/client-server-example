
const LoginController = require('../controllers/login_controller');

module.exports = (app) => {
    app.post('/api/login', LoginController.create)
}