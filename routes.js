

let path = require("path");
let express = require("express");    //new
let router = express.Router();      //new


router.get("/",function(req,res){
//	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});


const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Message = require('./Message');

router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	if (req.body.comment == "") {
		res.json({retVal:false});
		return;
	}	
//	let obj = new Student(req.body.identifier,req.body.name);
//	res.json({retVal:db.postStudent(obj)});
//	console.log(req.body.name);
//	console.log(req.body.comment);
//	res.json({retVal:true});

	let obj = new Message(req.body.name,req.body.comment);
	db.postMessage(obj)
	db.displayMessages();
	res.json({retVal:true});	
//	res.json({retVal:db.postMessage(obj)});	
});


router.get('/read', function(req, res){
//	res.json({retVal:db.getStudent(req.query.identifier)});
	res.json({retVal:db.getMessages()});
});





module.exports = router;   //new
