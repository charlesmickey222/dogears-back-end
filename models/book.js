import mongoose from 'mongoose'

const Schema = mongoose.Schema
const bookCommentSchema = new Schema({
  owner:{type: Schema.Types.ObjectId, ref:'Profile'},
  text:{type:String, required:true},
},{
  timestamps:true
})

const bookSchema = new Schema({
  olID:String,
  title:String,
  coverURL:String,
  authors: [String],//[{type:Schema.Types.ObjectId, ref:'Author'}],
  contributions:[String],
  publishDate:String,
  publishers:[String],
  description:String,
  pages:Number,
  subjects:[String],
  subjectPlaces:[String],
  subjectPeople:[String],
  subjectTimes:[String],
  readers:[{type:Schema.Types.ObjectId, ref:'Profile'}],
  comments:[bookCommentSchema],
  ratings:[{type:Schema.Types.ObjectId, ref:'Rating'}],
  addedBy:{type:Schema.Types.ObjectId, ref:'Profile'},
}, {
  timestamps:true
})

const Book = mongoose.model('Book', bookSchema)

export { Book }