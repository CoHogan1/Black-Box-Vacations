const express = require('express')
const blackBox = express.Router()
const blackBoxModel = require('../models/schema')

// GET -- index
blackBox.get('/', (req, res)=>{
	console.log("get route working.")
	blackBoxModel.find({}, (error, shoppingCart)=>{
		if (error){
			res.status(400).json(error)
		}
		else{
			res.status(200).json(shoppingCart)
		}
	})

})

// POST ROUTE
blackBox.post('/', (req, res)=>{
	console.log("post route working")
	blackBoxModel.create(req.body, (error, createVacation)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(201).json(createVacation)
		}
	})
})

// DELETE ROUTE
blackBox.delete('/:id', (req, res)=>{
	console.log("delete route working")
	blackBoxModel.findByIdAndDelete(req.params.id, (error, deletedVacation)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else if (deletedVacation === null){
			res.status(404).json({message: 'Vacation id not Found'})
		}
		else{
			res.status(200).json({message: `Vacation ${deletedVacation.name} deleted successfully`})
		}
	})
})

// UPDATE ROUTE
blackBox.put('/:id', (req, res)=>{
	console.log("update route working")
	blackBoxModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedVacation)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(200).json({
				message: `Vacation ${updatedVacation.id} updated successfully`,
				data: updatedVacation
			})
		}
	})
})

// PATCH ROUTE increments numbers of likes /// probably wont use this..... save for now.
blackBox.patch('/addlikes/:id', (req, res)=>{

	blackBoxModel.findByIdAndUpdate(req.params.id, { $inc: { likes : 1} }, {new:true}, (error, updatedVacation)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(200).json({
				data: updatedVacation
			})
		}
	})
})

module.exports = blackBox
