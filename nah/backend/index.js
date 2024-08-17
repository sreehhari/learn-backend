
import express from "express";
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/instagram',(req,res)=>{
//     res.send("sup")
// })

app.get('/api/jokes',(req,res)=>{

  const jokes =[
    {
      id:1,
      title:'a joke',
      content:'this is a joke'

    },
    {
      id:2,
      title:'another joke',
      content:'also a joke'
    },
    {
      id:3,
      title:'again a joke',
      content:'this too is a joke'
    }
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

