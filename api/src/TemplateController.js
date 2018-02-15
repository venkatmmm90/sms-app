var template=require('Template');
var bodyParser = require('body-parser');

module.exports= function(app){
	console.log("entered Controller");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/template/get/:id',function(req,res){
console.log("entered get");
		template.findById({id:req.params.id},function(err,templateValue){
			if(err) throw err;
			res.send(templateValue);
		});
	});

	app.post('/template/insert',function(req,res){
console.log("entered post");
console.log("header: "+req.body.header+" \n text:"+req.body.text +"\naccess: "+req.body.access+"\n isfavourite:"+req.body.isfavourite+"\nid:"+req.body.id+"\ncreatedAt:"+req.body.createdAt+"\ncreatedBy:"+req.body.createdBy);
		var templateValue= template({
			header:req.body.header,
	  		text:req.body.text,
			access:req.body.access,
			isfavourite:req.body.isfavourite,
			id:req.body.id,
			createdAt:req.body.createdAt,
			createdBy:req.body.createdBy


		});
		templateValue.save(function(err){
			if(err) throw  err;
			res.send('sucess');
		});
	});
	 app.delete('/template/delete', function(req, res) {
        console.log("entered delete");
        Todos.findByIdAndRemove(req.params.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
}