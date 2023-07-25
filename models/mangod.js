const mongoose = require('mongoose');

const mangodSchema = new mongoose.Schema({
blast_radius : { type:  Number, description: "Required Field", required: true },
lol : { type:  Number, description: "Required Field", required: true },
luckyNumber : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('mangod', mangodSchema);