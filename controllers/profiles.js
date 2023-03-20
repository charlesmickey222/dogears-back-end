import { Profile } from '../models/profile.js'
import { Book } from '../models/book.js'
import { v2 as cloudinary } from 'cloudinary'
import { Library } from '../models/Library.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

async function show(req,res){
  try {
    const profile = await Profile.findById(req.params.id)
    .populate({
      path: 'library',
      populate:{
        path:'bookCollection',
      }
    })
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function addBookToLibrary(req,res){
  try {
    if(!req.body.coverURL){
      req.body.coverURL = `https://imgur.com/5dUX5PC`
    }
    req.body.subjects = req.body.subjects.split(',')
    req.body.pages = parseInt(req.body.pages)
    req.body.authors = req.body.authors.split(',')
    req.body.publishers = req.body.publishers.split(',')
    req.body.subjectPlaces = req.body.subjectPlaces.split(',')
    req.body.subjectPeople = req.body.subjectPeople.split(',')
    req.body.addedBy = req.params.id;
    req.body.readers = [req.params.id]
    const query = req.body.title
    let newBook;
    Book.findOne({title:query}, function(err, book){
      if(err){
        console.log(err)
      }if(book){
        newBook = book;
      }else{
        newBook = Book.create(req.body)
      }
    })
    console.log(newBook)
    //const book = await Book.create(req.body)
    const profile = await Profile.findById(req.params.id)
    console.log(profile)
    if(profile.library){
      try {
        const library = await Library.findById(profile.library)
        library.bookCollection.unshift(newBook.id)
        await library.save()
      } catch (error) {
        res.status(502).json(error)
      }
    }else{
      try {
        const newLibrary = await Library.create({bookCollection:[newBook.id]})
        profile.library = newLibrary.id
        await profile.save()
      } catch (error) {
        res.status(501).json(error)
      }
    }
    console.log(profile)
    res.status(200).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function removeBookFromLibrary(req,res){
  try {
    console.log(req.body)
  } catch (error) {
    res.status(500).json(error)
  }
}

export{ 
  index,
  addPhoto,
  show,
  addBookToLibrary,
  removeBookFromLibrary,
}
