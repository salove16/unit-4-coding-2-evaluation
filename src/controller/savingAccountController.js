const express=require("express")

const SavingAccount=require("../models/savingAccountModel")

const router=express=express.Router()

router.post("/",async(req,res)=>{
    try {
        const savingAccount=await SavingAccount.create(req.body)
return res.status(200).send(savingAccount)

    } catch (err) {
        console.log(err)
    }
})



module.exports=router
