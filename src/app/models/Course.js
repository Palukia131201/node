const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String,require:true, },
    des: { type: String,},
    image: { type: String,require:true, },
    videoId: { type: String,},
    level: { type: String,},
},{
    timestamps:true,
});
module.exports = mongoose.model('Course', Course);