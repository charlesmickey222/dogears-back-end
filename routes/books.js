import { Router } from "express";
import { checkAuth } from "../middleware/auth.js";
import * as booksCtrl from '../controllers/books.js';

const router = Router()

router.post('', checkAuth, booksCtrl.create)

export { router }