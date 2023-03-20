import { Book } from "../models/book.js";

  async function create(req,res){
  try {
    const book = await Book.find({olID:req.body.book.olID})
    res.status(200).json(book)
  } catch (error) {
    try{
      const book = await Book.create(req.body.book)
      res.status(200).json(book)
    }
    catch(error){
      res.status(600).json(error)
    }
    res.status(500).json(error)
  }
  }
export{
  create,
}