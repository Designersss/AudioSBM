const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')




router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/:id', userController.getOne)
router.get('/', userController.getAll)

module.exports = router