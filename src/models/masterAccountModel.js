const  mongoose = require("mongoose");










const masterAccountSchema=new mongoose.Schema({
    
  balance:{type:String,required:true},
  branchDetailsId:{type:mongoose.Schema.Types.ObjectId,ref:"branchDetails",unique:true,required:true},
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",unique:true,required:true},

},
{
    versionKey:false,
    timestamps:true
});


const MasterAccount=mongoose.model("masterAccount",masterAccountSchema)



module.exports=MasterAccount
