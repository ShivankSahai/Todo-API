let express=require('express')
let bodyParser=require('body-parser')
let {ObjectID}=require('mongodb')

let {mongoose}=require('./db/mongoose.js') 

let {Todo}=require('./models/todo.js')
let {User}=require('./models/user.js')

let app=express()
let port=process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    console.log(req.body)

    let todo=new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos/:id',(req,res)=>{
    let id=req.params.id

    if(!ObjectID.isValid(id))
    return res.status(404).send()

    Todo.findById(id).then((todo)=>{
        if(!todo)
        return res.status(404).send()

        res.send({todo})
    }).catch((err)=>{
        res.status(400).send()
    })
})

app.listen(port)