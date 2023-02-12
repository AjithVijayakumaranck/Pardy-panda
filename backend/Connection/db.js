const mongoose = require('mongoose')


module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        mongoose.connect("mongodb+srv://imagebox:imagebox@imagebox.oitsfuo.mongodb.net/?retryWrites=true&w=majority",connectionParams)
        console.log("connected to database")
    } catch (error) {
        console.log(err);
    }
}