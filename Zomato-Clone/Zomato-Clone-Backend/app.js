const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');

const port=9564;
const host="localhost";


const routes=require('./Routes/index');
const app=express();


app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use('/',routes);


mongoose.connect('your mongodb url',
{ useNewUrlParser: true, useUnifiedTopology: true }
).then(res=>{
    app.listen(port,host,()=>{
        console.log(`server running at-${host}:${port}`);
    })
}).catch(err=>{console.log(err)})
