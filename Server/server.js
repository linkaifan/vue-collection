const express = require('express');
const mysql = require('mysql');

let db = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'linkaifan',
	database:'learn'
});



let app = express();
let port = 3001;
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
let server = app.listen(port,()=>{
	console.log('Example app listening at http://%s', port);
});