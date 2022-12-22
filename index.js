const express = require('express')
const cors=require("cors")
const dbConnect = require('./Config/db.config')
const Quiz = require('./Modal/quiz.modal')
const PORT=process.env.PORT
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send('hello'))

app.get("/quiz",async(req,res)=>{
    let q=await Quiz.find({})
    res.send(q)
})
app.get("/home",async(req,res)=>{
    let h=await Home.find({})
    res.send(h)
})
app.post("/home",async(req,res)=>{
   try{
     let newUser=await Home.create(req.body)
     res.send(newUser)
   }catch(e){
    read.send(e.message)
   }
})
app.listen(PORT, () => {
    dbConnect()
    console.log('server started on port 8080')})