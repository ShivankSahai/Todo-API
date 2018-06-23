// let MongoClient=require('mongodb').MongoClient
let { MongoClient, ObjectId } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server')

    console.log('Connected to MongoDb server')

    let db = client.db('TodoApp')

    // db.collection('Todos').deleteMany({text: "Learn Node Js"}).then((result)=>{
    //     console.log(result)
    // },(err)=>{
    //     console.log(err)
    // })

    // db.collection('Todos').deleteOne({ text: "Give food to Frosty" }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    // db.collection('Todos').findOneAndDelete({ text: "Give food to Frosty" }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    // db.collection('Users').deleteMany({ name: "Frosty" }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    db.collection('Users').findOneAndDelete({ _id: new ObjectId("5b2df7f7235b63e789e90446") }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log(err)
    })

    // client.close()
})