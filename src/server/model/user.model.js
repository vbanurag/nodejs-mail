import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
}, {safe: true})


const User = mongoose.model('User', userSchema)
export default User