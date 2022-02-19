const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json);

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'CustomerDB',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err) console.log('Connection established');
    else console.log('connection failed!!', JSON.stringify(err));
});

app.listen(3000, ()=>{
    console.log('Server Started at port 3000')
});

//GET ALL CUSTOMERS
app.get('/customers', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Customers', (err, rows, fields)=>{
        if(!err) res.send(rows);
        else console.log(err)
    })
});


//GET CUSTOMER BY ID
app.get('/customers/:id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Customers where Id = ?',[req.params.id], (err, rows, fields)=>{
        if(!err) res.send(rows);
        else console.log(err)
    })
});

//DELETE CUSTOMER BY ID
app.delete('/customers/:id', (req, res)=>{
    mysqlConnection.query('DELETE Customers where Id = ?',[req.params.id], (err, rows, fields)=>{
        if(!err) res.send('Deleted Successfully');
        else console.log(err)
    })
});

//INSERT CUSTOMER 
app.post('/customers', (req, res)=>{
    let emp = req.body;
    var sql = "SET @Id = ?; SET @Name = ?; CALL CustomerAddOrEdit(@Id, @Name);"
    mysqlConnection.query(sql,[emp.id, emp.name], (err, rows, fields)=>{
        if(!err) {
            rows.forEach(element => {
                if(element.constructor == Array)
                    res.send('Updated Successfully');
            });
        }
        else console.log(err)
    })
});


//UPDATE CUSTOMER 
app.put('/customers', (req, res)=>{
    let emp = req.body;
    var sql = "SET @Id = ?; SET @Name = ?; CALL CustomerAddOrEdit(@Id, @Name);"
    mysqlConnection.query(sql,[emp.id, emp.name], (err, rows, fields)=>{
        if(!err) {
            rows.forEach(element => {
                if(element.constructor == Array)
                    res.send('New customer inserted. Id = '+ element[0].id)
            });
        }
        else console.log(err)
    })
});
