// black box back end - api
const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
//const cors = require('cors') // not installed, may not need it.

// middle ware
app.use(express.json())

// mongoose
mongoose.connect('mongodb://localhost:27017/blackboxDB',{ // blackboxDB is DB name
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

// Setup Cors middleware // may not need this. Just here in case.
// const whitelist = ['http://localhost:3000','http://localhost:3003']
// const corsOptions = {
// 	origin: (origin, callback) => {
// 		if (whitelist.indexOf(origin) !== -1 || !origin) {
// 			callback(null, true)
// 		} else {
// 			callback(new Error('Not allowed by CORS'))
// 		}
// 	}
// }
//
// app.use(cors(corsOptions))

// monitor your DB connection
const db = mongoose.connection
db.once('open', ()=> console.log('BlackBox DB is connected...'))
db.on('error', (error)=> console.log(error.message))
db.on('disconnected', ()=> console.log('Mongoose is disconnected...'))

// controllers
//app.use('/holidays', require('./controllers/holidaysController')) // not in use yet.

app.listen(PORT, ()=>{
	console.log(`Black Box server is running......port= ${PORT}`);
})
