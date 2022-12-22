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

app.listen(PORT, () => {
    dbConnect()
    console.log('server started on port 8080')})