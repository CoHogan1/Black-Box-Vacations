// black box back end - api
const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')

// middle ware
app.use(express.json())

const mongoURI = process.env.MONGODBURI

const heroku = "https://blackbfrontend.herokuapp.com"



// mongoose
mongoose.connect(mongoURI ,{ // blackboxDB is DB name
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

// Setup Cors middleware // may not need this. Just here in case.
const whitelist = ['http://localhost:3000','http://localhost:3003',process.env.BASEURL,heroku]
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			console.log(whitelist)
			callback(new Error('Not allowed by CORS'))
		}
	}
}

app.use(cors(corsOptions))

// monitor your DB connection
const db = mongoose.connection
db.once('open', ()=> console.log('BlackBox DB is connected...'))
db.on('error', (error)=> console.log(error.message))
db.on('disconnected', ()=> console.log('Mongoose is disconnected...'))

// controllers
app.use('/blackbox', require('./controllers/blackbox'))

app.listen(PORT, ()=>{
	console.log(`Black Box server is running......port = ${PORT}`)
	console.log(whitelist)
})
