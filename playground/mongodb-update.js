// let MongoClient=require('mongodb').MongoClient
let { MongoClient, ObjectId } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server')

    console.log('Connected to MongoDb server')

    let db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //      _id: ObjectId("5b2d4410ff27900458e0581b")
    //     },{
    //         $set:{
    //             completed:true
    //         }
    //     },{
    //         returnOriginal:false
    //     }
    // ).then((data) => {
    //     console.log(JSON.stringify(data, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to display todos')
    // })

    db.collection('Users').findOneAndUpdate({
        _id: ObjectId("5b2d455b481be4108455fb21")
    }, {
            $set: {
                name: "Frosty"
            },
            $inc:{
                age: 1
            }
        }, {
            returnOriginal: false
        }
    ).then((data) => {
        console.log(JSON.stringify(data, undefined, 2))
    }, (err) => {
        console.log('Unable to display todos')
    })

    // client.close()
})