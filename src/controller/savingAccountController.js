const express=require("express")

const SavingAccount=require("../models/savingAccountModel")

const router=express=express.Router()

router.get("/",async(req,res)=>{
    try {
        const USer=await find().lean().exce()
return res.status(200).send(user)

    } catch (err) {
        console.log(err)
    }
})



module.exports=router
