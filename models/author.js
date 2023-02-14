import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
  olKey:String,
  name:String,
  altNames:[String],
  DOB:String,
  workCount:Number,
  topSubjects:[String],
  topBooks:[String],
  readers:[{type:Schema.Types.ObjectId, ref:'Reader'}],
})

const Author = mongoose.Model('Author', authorSchema)

export {Author}