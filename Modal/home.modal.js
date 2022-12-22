const {Schema,model}=require('mongoose')

const homeSchema=new Schema({
    category:{type:String,require:true},
    difficulty:{type:String,require:true},
    questions:{type:Number,require:true}
})
const Home=model("home",homeSchema)
module.exports=Home