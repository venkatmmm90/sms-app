var mongoose = require('mongoose');
var schema  = mongoose.Schema;
var templateSchema = new schema({
	header:String,
	text:String,
	access:String,
	isfavourite:Boolean,
	id:String,
	createdAt:String,
	createdBy:String
});

var Template=mongoose.model('Template',templateSchema);
module.exports=Template;
