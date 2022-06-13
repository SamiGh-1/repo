var express = require('express');
var app = express();
app.use(express.json());
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '11923667sS',
  database : 'users'
});
const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({extended : false});

/* connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */

var cors = require("cors")
app.use(cors({
  origin:"*"
}))
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/fontend/templates/webpage.html'));
}); 
app.use(parser .json());
app.use(urlencodedParser)

app.post('/register',function(req,res){
  res.send('Add User');
  connection.connect(function(err) {
    console.log("Connected!");  
    var sql = `INSERT INTO users (name,birthday,address,id,status,wife_id,id_photo,email,net,telephone,add_no,iptv,phone_no,date_added,updated) VALUES (${req.body.name},${req.body.birthday},${req.body.address},${req.body.id},${req.body.status},${req.body.wife_id},${req.body.ID_photo},${req.body.email},${req.body.net},${req.body.telephone},${req.body.add_no},${req.body.iptv},${req.body.phone_no},${date},${req.body.updated})`;
    connection.query(sql, function (err, result) {
      console.log("1 record inserted");  
      }); 
  }); 
});

app.put('/update_user',function(req,res){
  res.send('Update User');
  connection.connect(function(err) {
    console.log("Connected!");  
    var sql = `UPDATE users SET name=${req.body.name}, birthday=${req.body.birthday}, address=${req.body.address}, id=${req.body.id}, status=${req.body.status},wife_id=${req.body.wife_id}, id_photo=${req.body.ID_photo},email=${req.body.email}, net=${req.body.net}, telephone=${req.body.telephone}, add_no=${req.body.add_no}, iptv=${req.body.iptv}, phone_no=${req.body.phone_no}, date_added=${date}, updated=${req.body.updated} WHERE id=1`;
    connection.query(sql, function (err, result) {
      console.log("User updated");  
      }); 
  }); 
});
app.delete('/delete_user',function(req,res){
  res.send('Delete User');
  connection.connect(function(err) {
    console.log("Connected!");  
    var sql = `DELETE FROM users WHERE id=${req.body.id}`;
    connection.query(sql, function (err, result) {
      console.log("User deleted");  
      }); 
  }); 
});
var server = app.listen('5000', function () {
   var port = server.address().port
   console.log("Example app listening at", port)
});