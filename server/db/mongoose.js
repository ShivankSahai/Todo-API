let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://ShivankSahai:pizza123!!@ds129821.mlab.com:29821/todoapp' || 'mongodb://localhost:27017/TodoApp')

module.exports={mongoose}