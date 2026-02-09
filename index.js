const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    res.json({status : " OK good"})
})
app.listen(3000, ()=>{
    console.log('server is running good')
})