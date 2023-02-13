import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({

})

const Author = mongoose.Model('Author', authorSchema)

export {Author}