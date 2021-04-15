const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const holidaysSchema = new Schema({
	name: {type: String, required: true},
	location: {type:String, required: true},
}, {timestamps: true})


module.exports = model('Holiday', holidaysSchema)

//celebrated = location
// name will store the username
