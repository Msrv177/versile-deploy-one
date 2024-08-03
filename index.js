const express = require('express') 
const app = express() 
const port = 3000 

app.listen(port,()=>{
    console.log(` running at port - ${port}`);    
})

app.get('/',(req,res)=>{
    res.send(`<h1> heloo MSR V</h1>`)
})
app.get('/msr',(req,res)=>{
    res.send(`<h1> heloo madhusudhana rao V</h1>`)
})


app.get('/:id?',(req,res)=>{
    let id = req.params.id ;
    res.send(`<h1> ${id} -  madhusudhana rao V</h1>`)
})