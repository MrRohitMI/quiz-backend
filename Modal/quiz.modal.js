const {Schema,model}=require("mongoose")

const quizSchema=new Schema({
    category:{type:String,required:true},
    type:{type:String,required:true},
    difficulty:{type:String,required:true},
    question:{type:String,required:true},
    correct_answer:{type:String,required:true},
    incorrect_answers:[String]
})
const Quiz=model("quiz",quizSchema)
module.exports=Quiz