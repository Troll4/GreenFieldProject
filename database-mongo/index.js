var mongoose=require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/jobs",{ useMongoClient: true});

var db = mongoose.connection;
db.on("error",function(){
	console.log("connection errorr");
});
db.once("open",function() {
	console.log("connection success");
});
