const express=require("express")

const FixedAccount=require("../models/fixedAccountModel")

const router=express=express.Router()

router.post("/",async(req,res)=>{
    try {
        const fixedAccount=await FixedAccount.create(req.body)
return res.status(200).send(fixedAccount)

    } catch (err) {
        console.log(err)
    }
})



module.exports=router
