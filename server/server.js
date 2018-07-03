let express=require('express')
let bodyParser=require('body-parser')

let {mongoose}=require('./db/mongoose.js') 

let {Todo}=require('./models/todo.js')
let {User}=require('./models/user.js')

let app=express()

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    console.log(req.body)

    let todo=new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc)
    },(err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(err)=>{
        res.status(400).send(err)
    })
})

app.listen(3000)