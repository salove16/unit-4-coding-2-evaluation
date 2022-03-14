const express=require("express")
const app = require("..")

const MasterAccount=require("../models/masterAccountModel")

const router=express.Router()

router.get("/",async(req,res)=>{
    try {
        const MasterAccount=await find().populate("userId").lean().exce()
return res.status(200).send(MasterAccount)

    } catch (err) {
        console.log(err)
    }
})



module.exports=router

