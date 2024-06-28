const express = require('express');

const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
let db = '';
async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://abhijithmjithu:1234@cluster0.lyx3snq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('jyothi');
   ;
 }
let p =[{product:'car',discription:'sedan',price:'15lak',stock:'available'},{product:'scooter',discription:'two wheeler',price:'2lak',stock:'avilable'},{product:'bike',discription:'sportbike',price:'10lak',stock:'not avilable'}]
app.use(cors());
app.use(express.json());
app.get('/users', async function (req, res) {
    let output = await db.collection('collection1').find({}).toArray();
    res.json(output);
});
app.post('/signup',function(req,res){
    console.log(req.body);
    user.push(req.body);
})
app.post('/login',function(req,res) {
    console.log(req.body);
    for(let i = 0;i < user.length; i++){
        if(user[i].email == req.body.email){
            if(user[i].password == req.body.password) {
                return res.json(user[i]);
            }
        }
    }
    return res.json("email not found")
});
app.get('/productinfo',function(req,res){
    res.json(p)
})
app.listen(4000,function(){
    console.log('server is ready and listening on port');
    mongoConnect().then(()=> console.log('mongo ready'))
});