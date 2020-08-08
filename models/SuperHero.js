const {Schema,model,Types} = require('mongoose')

const schema = new Schema(
    {
        nikname: {type: String, required: true,unique:true},
        real_name: {type:String,required:true,unique:true},
        origin_descripton: {type:String,required:true,unique:true},
        superpowers: {type:String, ref: 'Powers'},
        catch_phrase: {type:String,required:true,unique:true},
        image: [{type:String, ref: 'Images'}]
    }
)

module.exports = model('SuperHero',schema)