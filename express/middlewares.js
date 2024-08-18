const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());
app.use(express.json());


app.post("/health",(req,res)=>{
    const kidneys =req.body.kidneys;
    const response= schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"failed "
        })
    }else{
        res.send({
            response
        })
    }
   
})

// app.use(function(err,req,res,next){
//     res.json({
//         msg:"sorry something went wrong"
//     })
// })


app.listen(3000);