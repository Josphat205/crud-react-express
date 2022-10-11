const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const port = 3000

//connect with database
const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'Loman254!',
    database: 'users_db'
})
// app.get('/', (req, res) => {
//     const insertData = "INSERT INTO users(name,email,title,description) values('Allan','allan@gmail.com','Graphic Designer','Am a good and smart graphics designer')";
//     db.query(insertData,(error,result)=>{
//         console.log('error',error);
//         console.log('error',result);
//         res.send('Data insertion!')
//     })
//     })
app.get('/users',(req,res)=>{
    const users = "SELECT * FROM users";
    db.query(users,(error,result)=>{
        res.send(result)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
