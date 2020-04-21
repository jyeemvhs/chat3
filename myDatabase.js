
const Message = require('./Message');

let myDatabase = function() {
	this.messages = [];
}

let messageIndex = 0;


myDatabase.prototype.displayMessages = function() {
	console.log("============")
	for (let i=0;i<this.messages.length;i++) {
		console.log(this.messages[i]);
	}
}

myDatabase.prototype.postMessage = function(message) {
  this.messages[messageIndex++] = new Message(message.name,message.comment);
  return true;
}


myDatabase.prototype.getMessages = function() {
    return(this.messages);
}


module.exports = myDatabase;
