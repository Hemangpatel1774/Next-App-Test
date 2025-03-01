import mongoose from "mongoose";

if (mongoose.models.User) {
    delete mongoose.models.User;
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    date: {
        type: Number,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);
export default User;