const  mongoose = require("mongoose");










const savingAccountSchema=new mongoose.Schema({
    
    account_number:{type:Number,unique:true,required:true},
    balance:{type:Number,required:true},
    interestRate: {type:String,required:true},
    branchDetailsId:{type:mongoose.Schema.Types.ObjectId,ref:"branchDetails",unique:true,required:true}
    

},
{
    versionKey:false,
    timestamps:true
});


const SavingAccount=mongoose.model("savingAccount",savingAccountSchema)



module.exports=SavingAccount
