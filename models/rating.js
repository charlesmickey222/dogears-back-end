import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ratingSchema = new Schema({

})

const Rating = mongoose.Model('Rating', ratingSchema)

export {Rating}