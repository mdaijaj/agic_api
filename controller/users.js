const axios = require("axios");
const product_book=require('../models/schema')

const country_or_city = async(req, res, key) => {
   
   try{
      let baseUrl = `${process.env.url}/countries`
      let apikey = process.env.apikey
      var options = {
         'method': 'GET',
         'url': baseUrl,
         'headers': {
           'api-key': apikey,
           'Content-Type': 'application/json'
         }
       };
       const result = await axios(options);
       console.log(result.data.data.length)
       res.send(result.data)

   }catch(error){
      console.log("message: ", error.message)
      return res.send({ data: null, error: error.message})
   }
}  



const priceAndAvailability= async(req, res)=>{
   try{
      const data=req.body
      console.log(data)
      let baseUrl = `${process.env.url}/priceAndAvailability`
      let apikey = process.env.apikey
      var options = {
         'method': 'POST',
         'url': baseUrl,
         'headers': {
           'api-key': apikey,
           'Content-Type': 'application/json'
         },
         data: data
       };

       const result = await axios(options);
       console.log("result", result)
       res.send(result.data)
   }catch(err){
      console.log(err.message)
   }
}

const attraction= async(req,res)=>{
   try{
      let baseUrl = `${process.env.url}/proattractions?country=Argentina&city=Bariloche&page=1&currency=SGD`
      let apikey = process.env.apikey
      var options = {
         'method': 'GET',
         'url': baseUrl,
         'headers': {
           'api-key': apikey,
           'Content-Type': 'application/json'
         }
       };
       const result = await axios(options);
       console.log(result.data.data.length)
       res.send(result.data)

   }catch(error){
      console.log("message: ", error.message)
      return res.send({ data: null, error: error.message})
   }
}


const booking= async(req,res)=>{
   const booking_data=req.body
   await product_book.insertOne({
      firstName: booking_data.firstName,
      lastName: booking_data.lastName,
      personTitle: booking_data.personTitle,
      email : booking_data.email,
      phone: booking_data.phone,
      passport: booking_data.passport,
      date: booking_data.data,
      pickup:booking_data.pickup,
      protect:booking_data.protect,
      comments:booking_data.comments,
      currency:booking_data.currency,
      bookings:booking_data.bookings
   })
}

module.exports={
   country_or_city,
   priceAndAvailability,
   attraction,
   booking
}


