const mongoose=require('../database/db')
const uniqueValidator = require('mongoose-unique-validator')

let classSchema= new mongoose.Schema({
   firstName: {
      type: String,
      trim: true,      
   },
   lastName: {
      type:Number, 
      trim: true,
   },
   personTitle: {
      type: String,
      trim: true,      
   },
   email: {
      type: String,
      trim: true,
      uniquea: true      
   },
   phone: {
      type:Number, 
      trim: true,
   },
   passport: {
      type: String,
      trim: true,      
   },
   date: {
      type: Date,
      trim: true,      
   },
   pickup: {
      type:String, 
      trim: true,
   },
   protect: {
      type: String,
      trim: true,      
   },
   comments:{
      type: String,
      trim: true,      
   },
   currency: {
      type:String, 
      trim: true,
   },
   bookings: {
      type: Array,
      trim: true,      
   }
});     


classSchema.plugin(uniqueValidator)
module.exports= mongoose.model('User_details', classSchema);