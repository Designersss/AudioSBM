const {Services} = require("../models/models");

class servicesController {
    async create(req, res) {
        const {name} = req.body
        const services = await Services.create({name})
        return res.json(services)
    }
    async getAll(req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }
    async getOne(req, res) {

    }
}

module.exports = new servicesController()