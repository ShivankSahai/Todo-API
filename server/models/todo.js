let mongoose=require('mongoose')

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports={Todo}


// How to do:

// let newTodo=new Todo({
//     text: 'Do project'
// })

// newTodo.save().then((result)=>{
//     console.log(result)
// },(err)=>{
//     console.log(err)
// })