import mongoose from "mongoose";    

export  async function connect (){
    try {
        
        mongoose.connect(process.env.MONGODB_URL)
        const connection=mongoose.connection
        connection.on("connected",()=>{
            console.log("MongoDB connected Succesfully");
        })
        connection.error("error",(err)=>{
            console.log("MongoDB connection Error please check  connection once" +err);
            process.exit()

        })
    } catch (error) {
        console.log("something went wrong in connection DB");
        console.error(error);

        
    }

}