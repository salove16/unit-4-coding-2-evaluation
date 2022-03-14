const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
middleName:{type:String,required:false},
lastName:{type:String,required:true},
age:{type:String,required:true},
email:{type:String,unique:true,required:true},
address:{type:String,required:true},
gender:{type:String,required:true},
type:{type:String,default:"customer",required:true}
},
{
    versionKey:false,
    timestamps:true
});



const User= mongoose.model("user",userSchema)

module.exports=User