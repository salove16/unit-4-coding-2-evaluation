const mongoose = require("mongoose");










const fixedAccountSchema = new mongoose.Schema({

    account_number: { type: Number, unique: true, required: true },
    balance: { type: Number, required: true },
    interestRate: { type: String, required: true },

    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
    branchDetailsId:{type:mongoose.Schema.Types.ObjectId,ref:"branchDetails",unique:true,required:true}

},
    {
        versionKey: false,
        timestamps: true
    });


const FixedAccount = mongoose.model("fixedAccount", fixedAccountSchema)



module.exports = FixedAccount
