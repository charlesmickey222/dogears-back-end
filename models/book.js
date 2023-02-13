import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({

})

const Book = mongoose.Model('Book', bookSchema)

export {Book}