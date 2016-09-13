var mongoose = require('mongoose');
var Info = require('./db/models/info');
var Qa require('./db/models/qa')

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Open connection");
});
db.once('close', function() {
    console.log("Close connection");
})

module.exports = {
    checkValidateAccount
}

// createInfoTableRow('anhph12', '1234566', 'HoaiAnh', 26);

function createInfoTableRow(username, password, name, age) {
    mongoose.connect('mongodb://localhost/test');
    var user = new Info({
        account: username,
        password: password,
        info: {
            name: name,
            age: age
        }
    }).save();
    mongoose.disconnect();
}

function checkValidateAccount(username, password, callback) {
    mongoose.connect('mongodb://localhost/test');

    Info.find({
        account: username,
        password: password
    }, function(err, data) {
        callback(data.length > 0 ? 1 : 0);
    });

    mongoose.disconnect();
}

function getQuestion(callback) {
    mongoose.connect('mongodb://localhost/tets');

    mongoose.disconnect();
}
