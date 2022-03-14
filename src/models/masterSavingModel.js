const mongoose = require("mongoose")



const mastersavingSchema=new mongoose.Schema({
    masterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",unique:true,required:true},
    savingAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"savingAccount",unique:true,required:true}
})


const MasterSaving=mongoose.model("mastersaving",masterFixedSchema)

module.exports=MasterSaving