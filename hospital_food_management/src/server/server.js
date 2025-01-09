const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')

dotenv.config({path:'./config.env'});

const DB = process.env.Database;
mongoose.connect(DB).then(()=>{
    console.log(`connnection successfull`)
}).catch((err)=>console.log(`connection did not established`));

app.use(express.static(path.join(__dirname,'../../')));
app.use('/src',express.static(path.join(__dirname,'../../src')));

app.get('/',(req,res)=>{
   res.send('Hello there');
})

app.post('/login', async (req, res) => {
   const { username, password } = req.body;
 
   try {
     const user = await User.findOne({ username });
 
     if (!user) {
       return res.status(401).json({ message: 'Invalid username or password' });
     }
 
     const isPasswordValid = await bcrypt.compare(password, user.password);
 
     if (!isPasswordValid) {
       return res.status(401).json({ message: 'Invalid username or password' });
     }
 
     res.status(200).json({ message: 'Login successful' });
   } catch (error) {
     res.status(500).json({ message: 'Server error' });
   }
 });



app.listen(8080,()=>{
   console.log("Server started on Port 8080");     
}) 
