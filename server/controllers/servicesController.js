const {Services} = require("../models/models");

class servicesController {
    async create(req, res) {
        const {name, price} = req.body
        const services = await Services.create({name, price})
        return res.json(services)
    }
    async getAll(req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }
    async getOne(req, res) {
        const {id} = req.params
        const services = await Services.findOne({
            where: {id}
        })
        return services
    }
}

module.exports = new servicesController()