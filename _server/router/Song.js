

const express=require('express')
const router=express.Router();
const _songsInfo=require('../config/songs_info')



router.get('/songs',(req,res,next)=>{
const _Info_Yanni=_songsInfo._Yanni;
res.status(200).json(_Info_Yanni)
})

module.exports=router;





