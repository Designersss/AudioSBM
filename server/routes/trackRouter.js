const Router = require('express')
const router = new Router()
const trackController = require('../controllers/trackController')


router.post('/', trackController.create)
router.get('/', trackController.getAll)
router.get('/prod/:artist', trackController.getAllUser)
router.get('/:id', trackController.getOne)
router.get('/genre/:genre', trackController.getGenres)

module.exports = router