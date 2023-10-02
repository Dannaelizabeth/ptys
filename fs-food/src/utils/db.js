import mongoose from "mongoose";

//definicion de la url de MongoDB

const MONGO = process.env.MONGO

//Verificacion de la URL

 if(!MONGO){
     throw new Error(
         'Please define the URL variable'
     )
 }

 let cached = global.mongoose

 if(!cached){
     cached = global.mongoose ={
         conn:null,
         promise:null
     }
 }

 async function dbConnect (){
     if(cached.conn){
         return cached.conn
     }

     if(!cached.promise){
         const opts ={
             bufferCommands: false,
         }

         cached.promise = mongoose.connect(MONGO,opts).then((mongoose)=>{
             return mongoose
         })
     }
     cached.conn = await cached.promise
     return cached.conn
 }

 export default dbConnect;