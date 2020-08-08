const {Router} = require('express')
const express = require("express");
const router =  Router()
const Hero = require('../models/SuperHero')
const Images = require('../models/Images');
const SuperHero = require('../models/SuperHero');


// /api/mainpage
router.post('/create',async(req,res)=>
{  
    try
    {
        const { Sname, SrealName, Sdescription,Spowers,Spharse,Simage} = req.body
        

        const HeroChack = await Hero.findOne({"nikname":Sname})

         if (HeroChack)
         {
            return res.status(400).json({message: "Такой супергерой уже существует"});
         }

         let image = Simage.split(' ');

        const NewHero = new Hero({nikname: Sname,real_name: SrealName,origin_descripton: Sdescription,superpowers: Spowers,catch_phrase:Spharse,image: Sname});
        NewHero.save()

        

          image.map((e)=>
          {
              console.log(e)
             const Img = new Images({link: e,owner: NewHero.id})
             Img.save()
          })

          res.status(201).json({ })

    }
    catch(e)
    {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }
})


router.get('/main',async (req,res) =>
{
    try
    {
    let arrHerosInfo = []
    let heros = await SuperHero.find({})
    let herroImg = await(Images.find({}))
    let HerroInformation = {}
    heros.map((e)=>
    {
        HerroInformation = {
            'id': e._id,
            'nikname' : e.nikname,
            'real_name': e.real_name,
            'origin_descripton': e.origin_descripton,
            'superpowers': e.superpowers,
            'catch_phrase': e.catch_phrase,
            'images': []
        }
        herroImg.map((a)=>
        {
             if(e.id == a.owner)
             {
                 HerroInformation.images.push(a.link)
             }
        })
        arrHerosInfo.push(HerroInformation)
    })
    res.status(201).json({ arrHerosInfo })
}
catch(e)
{

}

})

router.get('/:id', async(req,res) => 
{
    const dataHero = await SuperHero.findOne({'_id': req.params.id})
    const images = await Images.find({'owner': dataHero.id})
    
    let Hero = {
        'id':dataHero._id,
        'nikname' : dataHero.nikname,
        'real_name': dataHero.real_name,
        'origin_descripton': dataHero.origin_descripton,
        'superpowers': dataHero.superpowers,
        'catch_phrase' : dataHero.catch_phrase,
        'images': []
    }

    images.map((e)=>
    {
        Hero.images.push(e.link)
    })


    res.status(201).json({ Hero })
})


router.post('/delete', async(req,res) => 
{
   await Images.deleteOne({'link': req.body.element})
   res.status(201).json({})
})


module.exports = router