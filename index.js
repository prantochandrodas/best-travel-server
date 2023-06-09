const express = require('express');
const cors = require('cors');
const port =process.env.PORT || 5000;
const app=express();


//middleware 
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('best-travel server is running')
});

app.listen(port,()=>console.log(`best-travel server is running on ${port}`))