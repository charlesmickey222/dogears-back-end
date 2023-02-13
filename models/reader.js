import mongoose from 'mongoose'

const Schema = mongoose.Schema
const readerSchema = new Schema({

})

const Reader = mongoose.Model('Reader', readerSchema)

export {Reader}