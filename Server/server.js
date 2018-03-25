const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

let db = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'linkaifan',
	database:'learn'
});



let app = express();
//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let port = 3001;
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});
app.get('/worker',(req,res)=>{
	let sendObj = {};
	db.query(`SELECT * FROM worker_table`,
		(err,data)=>{
			if (err) {
				console.error(err);
				res.status(500).send('database error').end();
			}else if (data.length == 0){
				res.status(404).send('data not found').end();
			}else{
				sendObj = data;
				console.log(data)
				res.setHeader("Access-Control-Allow-Origin","*");
				res.send(sendObj);
				res.end();
			}
		});
});
app.post('/upload',(req,res)=>{
	let ID = 1
	if (req.body) {
		let {name,academy,phone,intro,exper} = req.body
		db.query(`INSERT INTO upload_table (ID,name,academy,phone,intro,exper) VALUE 
			('${ID}','${name}','${academy}','${phone}','${intro}','${exper}')`,
			(err,data)=>{
				if (err) {
					console.error(err);
					res.status(500).send('database error').end();
				}else{
					res.status(200).send('报名成功').end();
					ID++;
				}
			});
	}else{
		res.status(400).send('error').end();
	}
	
});
let server = app.listen(port,()=>{
	console.log('Example app listening at http://%s', port);
});