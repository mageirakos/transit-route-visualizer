const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const validator = require('validator')
const uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new Schema({
    username: {
        type: String,
        require,
        unique: true
    },
    password: {
        type: String,
        require,
        minLength: 6
    },
    email: {
        type: String,
        require,
        unique: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    name: {
        fname: String,
        lname: String
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String
    }
})

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', async function(next) {
    //'this' refers to the current document about to be saved
    const user = this;
    //Hash the password with a salt round of 7, the higher the rounds the more secure, but the slower
    //your application becomes.
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});

UserSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.token = token
    await user.save()
    return token
}

UserSchema.statics.findByCredentials = async(username, password) => {
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const User = mongoose.model('User', UserSchema)
module.exports = User