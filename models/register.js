var mongoose = require('mongoose');

// Document schema for users registration
exports.RegSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }
});