import mongoose from 'mongoose'

const Schema = mongoose.Schema

const librarySchema = new Schema({
  likedAuthors:[{type:Schema.Types.ObjectId, ref:'Author'}],
  likedSubjects:[String],
  dogears:[{type:Schema.Types.ObjectId, ref:'Dogear'}],
  bookCollection:[{type:Schema.Types.ObjectId, ref:'Book'}]
})

const Library = mongoose.model('Library', librarySchema)

export{Library}