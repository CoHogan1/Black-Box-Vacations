const express = require('express');
const blackBox = express.Router();
const blackBoxModel = require('../models/schema');


// GET (index) list of
blackBox.get('/', (req, res)=>{
	// res.send('Get route is working!!!');
	blackBoxModel.find({}, (error, boxuser)=>{
		if (error){
			res.status(400).json(error)
		}
		else{
			res.status(200).json(boxuser)
		}
	})

});


// POST ROUTE
blackBox.post('/', (req, res)=>{


	blackBoxModel.create(req.body, (error, createHoliday)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(201).json(createHoliday)
		}
	})

});


// DELETE ROUTE
blackBox.delete('/:id', (req, res)=>{

	holidaysModel.findByIdAndDelete(req.params.id, (error, deletedHoliday)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else if (deletedHoliday === null){
			res.status(404).json({message: 'Holiday id not Found'})
		}
		else{
			res.status(200).json({message: `Holiday ${deletedHoliday.name} deleted successfully`})
		}
	})
})


// UPDATE ROUTE
blackBox.put('/:id', (req, res)=>{

	holidaysModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedHoliday)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(200).json({
				message: `Holiday ${updatedHoliday.id} updated successfully`,
				data: updatedHoliday
			})
		}
	})
})

// PATCH ROUTE increments numbers of likes
blackBox.patch('/addlikes/:id', (req, res)=>{

	holidaysModel.findByIdAndUpdate(req.params.id, { $inc: { likes : 1} }, {new:true}, (error, updatedHoliday)=>{
		if (error){
			res.status(400).json({error: error.message})
		}
		else{
			res.status(200).json({
				data: updatedHoliday
			})
		}
	})
})



module.exports = holidays;
