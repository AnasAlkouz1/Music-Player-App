
const express=require('express');
const app=express();
let PORT=process.env.PORT || 8080;

const cors=require('cors')




app.use(cors())
app.use('/_api/',require('./router/Song'))
app.listen(PORT,()=>{console.log('Server Is Work 😄 ')})

