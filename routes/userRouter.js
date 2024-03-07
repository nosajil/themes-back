import express from 'express'
import UserSchema from '../models/users.js'

const UserRouter = express.Router()

UserRouter.get('/users', async (req, res) => {
    try {
        const users = await UserSchema.find()
        res.json(users)
    } catch (error) {
        console.log(error.message)  
    }
})

UserRouter.post('/users', async (req, res) => {
    try {
        const newUser = await UserSchema.create(req.body)
        res.json(newUser)
    } catch (error) {
        console.log(error.message)
    }
})

UserRouter.post('/users/:id', async (req, res) => {
    try {
        const userById = await UserSchema.findById(req.params.id)
        res.json(userById)
    } catch (error) {
        console.log(error.message)
    }
})

UserRouter.put('/users/:id', async (req, res) => {
    try {
        const userToUpdateById = await UserSchema.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true})
        res.json(userToUpdateById);
    } catch (err) {
        console.log(err.message)
    }
})

UserRouter.delete('/users/:id', async (req, res) => {
    try {
        const userToDelete = await UserSchema.findByIdAndDelete(req.params.id)
        res.json('User has been deleted');
    } catch (err) {
        console.log(err.message)
    }
})

export default UserRouter;




