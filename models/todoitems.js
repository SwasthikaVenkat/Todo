const mongoose=require('mongoose');
const TodoIdemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('todo',TodoIdemSchema)