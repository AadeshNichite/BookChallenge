const mongoose = require('mongoose');
const db = "mongodb+srv://Aadesh:nMM8ilJlC0TJvz6O@cluster0-qvy1m.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db,{ 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify: true
         });
        console.log("MongoDB Connected")
    } catch(err){
        console.log(err.message);
        //Exit Process
        process.exit(1);
    }
}

module.exports = connectDB;