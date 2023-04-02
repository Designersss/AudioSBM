const {Services} = require("../models/models");

class servicesController {
    async create(req, res) {
        const {name} = req.body
        const services = await Services.create({name})
        return res.json(services)
    }
    async getAll(req, res) {

    }
    async getOne(req, res) {

    }
}

module.exports = new servicesController()