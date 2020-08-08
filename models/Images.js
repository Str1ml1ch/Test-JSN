const {Schema,model,Types} = require('mongoose')

const schema = new Schema(
    {
        link: {type: String, required: true,unique:true},
        data: {type:Date,default: Date.now},
        owner: {type: String,ref: 'SuperHero'}
    }
)

module.exports = model('Images',schema)