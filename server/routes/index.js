const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const trackRouter = require('./trackRouter')
const servicesRouter = require('./servicesRouter')
const albumRouter = require('./albumRouter')


router.use('/user', userRouter)
router.use('/services', servicesRouter)
router.use('/album', albumRouter)
router.use('/track', trackRouter)

module.exports = router