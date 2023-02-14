import mongoose from "mongoose";

const Schema = mongoose.Schema



const dogearSchema = new Schema({
    
},{
  timestamps: true,
})

const Dogear = mongoose.model('Dogear', dogearSchema)

export { Dogear }