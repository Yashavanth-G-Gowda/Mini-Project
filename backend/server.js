import express from "express";
import cors from 'cors';
import 'dotenv/config';


const app=express();
const port=5000

app.use(express.json())
app.use(cors())

app.get(1/1,(req,res)=>{
  res.send('API working')
})

app.listen(port,()=>console.log('Server started on port:'+port));
