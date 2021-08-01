const packModel = require('mongoose');
const packDB = require('../database/dbform');


let schema = packModel.Schema;

const cocoaMessageModel = new schema({
	name: String,
	companyName: String,
	contact_email: String,
    message: String,
	data: Object,
	timeStamp: String
})

const Cocoa = packModel.model('cocoa', cocoaMessageModel); 

//exports

module.exports = Cocoa;