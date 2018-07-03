let mongoose = require('mongoose')

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports={User}

// How to do:

// let newUser = new User({
//     email: 'shivanksahai@outlook.com'
// })

// newUser.save().then((result) => {
//     console.log(result)
// }, (err) => {
//     console.log(err)
// })

// let newUser2 = new User({
//     email:'sahai.shivank@gmail.com'
// })

// newUser2.save().then((result) => {
//     console.log(result)
// }, (err) => {
//     console.log(err)
// })
