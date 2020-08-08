const {Router} = require('express')
const express = require("express");
const router =  Router()
const Hero = require('../models/SuperHero')
const Images = require('../models/Images');



router.post('/change',async(req,res) => 
{
    const {Sname,SrealName,Sdescriptio,Spowers,Spharse,Simage,id} = req.body
    await Hero.updateOne({_id:id},{'nikname':Sname})
    let image = Simage.split(' ');
    let arr = []
      image.map((e)=>
      {
         const Img = new Images({link: e,owner: id})
         arr.push(e)
         Img.save()
      })
      
      res.status(201).json(arr)
})

module.exports = router