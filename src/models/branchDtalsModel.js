const mongoose = require("mongoose")





const branchDetailsSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    address: {type:String,required:true},
    IFSC: {type:String,required:true},
    MICR: {type:String,required:true}
    

},
{
    versionKey:false,
    timestamps:true
});


const Branch=mongoose.model("branchDetails",branchDetailsSchema)



module.exports=Branch