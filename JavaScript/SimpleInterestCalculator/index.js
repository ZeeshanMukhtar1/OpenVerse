const express=require('express');
const app= express();

const cors=require('cors');
app.use(cors());
app.use(express.json())

app.get('/sum', (req,res)=>{
   const a=req.query.a;
   const b=req.query.b;
   const c=parseInt(a)+parseInt(b);
   res.json(c);
})

app.get('/interest', (req,res)=>{
    const p=parseInt(req.query.p);
    const r=parseFloat(req.query.r);
    const t=parseFloat(req.query.t);
 
    const i=(p*r*t)/100;
    const f=p+i;
    res.json({
        "interest" : i,
        "amount" : f
    });
   
})
// app.listen(3000);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


