// let MongoClient=require('mongodb').MongoClient
let { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server')

    console.log('Connected to MongoDb server')

    let db = client.db('TodoApp')

    // db.collection('Todos').find({completed:false}).toArray().then((data)=>{
    //     console.log(JSON.stringify(data,undefined,2))
    // },(err)=>{
    //     console.log('Unable to display todos')
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('No. of todos: '+count)
    // }, (err) => {
    //     console.log('Unable to count todos')
    // })

    db.collection('Users').find({ name: 'Frosty' }).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2))
    }, (err) => {
        console.log('Unable to display todos')
    })

    // client.close()
})