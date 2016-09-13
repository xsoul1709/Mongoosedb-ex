var express = require('express');
var app = express();
var http = require('http');
var connectdb = require('./connectdb');

app.use(express.static(__dirname + "/client"))

app.route("/api/login")
    .get(function(req, res) {
        // Get object send from AJAX
        var obj = {};
        var query = require('url').parse(req.url).query;
        console.log(query);
        var objectData = JSON.parse(decodeURIComponent(query));
        // console.log(objectData["password"]);
        // console.log(objectData["username"]);

        // Authenticate account (dummy)
        connectdb.checkValidateAccount(objectData['username'], objectData['password'], (result) => {
            console.log(result);
            res.end(result ? JSON.stringify({
                status: 200,
                success: 'Validated'
            }) : JSON.stringify({
                status: 300,
                success: 'Unvalidated'
            }));
        });
    });

app.route("/api/question")
    .get(function(req, res) {
        
    })

http.createServer(app).listen(8888);
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
