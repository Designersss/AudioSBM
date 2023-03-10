const sequelize = require('../bd')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    socialVk: {type: DataTypes.STRING},
    socialTel: {type: DataTypes.STRING},
})

const Track = sequelize.define('track', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    artist: {type: DataTypes.STRING},
    listens: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER},
    genre: {type: DataTypes.STRING},
    BPM: {type: DataTypes.STRING},
    track: {type: DataTypes.STRING},
})

const Album = sequelize.define('album', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
    track: {type: DataTypes.STRING},
})

const Services = sequelize.define('services', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.STRING}
})

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comments: {type: DataTypes.STRING},
})

User.hasMany(Track)
Track.belongsTo(User)

User.hasMany(Services)
Services.belongsTo(User)

User.hasMany(Album)
Album.belongsTo(User)

Album.hasMany(Track)
Track.belongsTo(Album)

Track.hasMany(Comments)
Comments.belongsTo(Track)

module.exports = {
    User,
    Track,
    Album,
    Services,
    Comments
}