const express = require("express")

const app = express();
app.use(express.json());
function sum(n){
    let ans =0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}

const users =[{
    name:'jamal',
    kidneys:[{
        healthy:false
    },
    {
        healthy:true
    }
]
}]

app.get("/",function(req,res){
  const jamalkidneys = users[0].kidneys;
  const count = jamalkidneys.length;
  let healthy=0;
  let unhealthy=0;
  for(let i=0;i<count;i++){
    if(jamalkidneys[i].healthy){
        healthy=healthy+1;
    }

  }
  unhealthy=count-healthy;

  res.json({
    jamalkidneys,
    count,
    healthy,
    unhealthy
  })
})



app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })

    res.json({
        msg:"done"
    })
})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys.healthy){
            newKidneys.push({
                healthy:true
            })
        }
        users[0].kidneys=newKidneys;
        res.json({
            msg:"done"
        })
    }
})


app.listen(3000);