const path = require("path");
const {Track} = require("../models/models");
const uuid = require('uuid')
const ApiError = require('../error/ApiError')
class trackController {
    async create(req, res, next) {
        try{
            const {name, artist, listens, price, genre, BPM} = req.body
            const {img} = req.files
            const {trackMp} = req.files
            let fileNameOne = uuid.v4() + ".jpg"
            let trackName = uuid.v4() + ".mp3"
            img.mv(path.resolve(__dirname, '..', 'static', fileNameOne))
            trackMp.mv(path.resolve(__dirname, '..', 'tracksFile', trackName))
            const track = await Track.create({name, artist, listens, price, genre, BPM,  img: fileNameOne, trackMp: trackName})

            return res.json(track)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        const track = await Track.findAll()
        return res.json(track)
    }
    async getOne(req, res) {
        const {id} = req.params
        const track = await Track.findOne(
            {
                where: {id}
            }
        )
        return res.json(track)
    }
}

module.exports = new trackController()