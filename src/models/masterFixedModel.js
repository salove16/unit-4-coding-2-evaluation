const mongoose = require("mongoose")



const masterFixedSchema=new mongoose.Schema({
    masterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",unique:true,required:true},
    fixedAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"fixedAccount",unique:true,required:true}
})


const MasterFixed=mongoose.model("masterFixed",masterFixedSchema)

module.exports=MasterFixed