const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const port = 5000

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
app.get('/api/users',(req,res)=>{
    const users = "SELECT * FROM users";
    db.query(users,(error,result)=>{
        res.send(result)
    })
})
//post users
app.post('/api/get',(req,res)=>{
    const{name,email,title,description}=req.body;
    const AddUser = "INSERT INTO users(name,email,title,description) values(?,?,?,?)";
    db.query(AddUser,[name,email,title,description],(error,result)=>{
        if(error){
          console.log(error)
        }
        console.log(result)
    })
})

//delete user
app.delete('/api/remove/:id',(req,res)=>{
    const{id}=req.params;
    const DeleteUser = "DELETE FROM users WHERE id= ?";
    db.query(DeleteUser,id,(error,result)=>{
        if(error){
          console.log(error)
        }
        console.log(result)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
