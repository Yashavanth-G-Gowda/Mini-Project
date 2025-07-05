import mongoose, { mongo } from 'mongoose'


const connectDB =async()=>{
    await mongoose.connect(`${process.env.MONGO_URI}`);
    mongoose.connection('connected',()=>{console.log("MongoDB Connected fter Gowtham's invollment");
    })
}

export default connectDB;