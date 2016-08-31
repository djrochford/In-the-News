var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db.js');
var Story = require('./db/storyModel.js');

var port = 8080;
var ip = '127.0.0.1';

var server = express();

server.use(bodyParser.json());

server.use(express.static(__dirname + '/public'));

server.post('/archive', function(req, res) {
  req.body.forEach(function(story) {
    var story = new Story(story);
    story.save(function(err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  })
})

server.post('/retrieve', function(req, res){
  var results = [];
  var cursor = Story.find(req.body).cursor();
  cursor.on('data', function(doc) {
    console.log(doc);
    results.push(doc);
  });
  cursor.on('close', function() {
    res.send(results);
  })
});

server.listen(port, ip);

