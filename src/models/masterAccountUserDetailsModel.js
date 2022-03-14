const mongoose = require("mongoose");

const masterAccountUserDetailsSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",unique:true,required:true},
    masterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"masterAccount",unique:true,required:true}

},
{

    versionKey:false,
    timestamps:true

})


const MasterAccountUserDetails=mongoose.model("masterAccountUserDetails",masterAccountUserDetailsSchema)


module.exports=MasterAccountUserDetails