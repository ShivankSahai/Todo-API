// let MongoClient=require('mongodb').MongoClient
let { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err)
    return console.log('Unable to connect to MongoDB server')
    
    console.log('Connected to MongoDb server')

    let db=client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Eat Sleep',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert todo')

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Frosty',
    //     age: 6,
    //     location: 'Lucknow'
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert user')

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    client.close()
})