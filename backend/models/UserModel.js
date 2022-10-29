import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Users', User);