const express=require("express")

const User=require("../models/userModel")

const router=express=express.Router()

router.get("/",async(req,res)=>{
    try {
        const user=await find().lean().exce()
return res.status(200).send(user)

    } catch (err) {
        console.log(err)
    }
})



module.exports=router
