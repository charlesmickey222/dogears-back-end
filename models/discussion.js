import mongoose from 'mongoose'

const Schema = mongoose.Schema

const discussionSchema = new Schema({

})

const Discussion = mongoose.Model('Discussion', discussionSchema)

export {Discussion}