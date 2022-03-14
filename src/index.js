const express=require("express")
const app=express()


app.use(express.json())


const masterAccountController=require("./controller/masterAccountController")
app.use("/masterAccount",masterAccountController)

module.exports=app