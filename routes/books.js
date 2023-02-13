import { Router } from "express";
import { checkAuth } from "../middleware/auth";
import * as booksCtrl from '../controllers/books';

const router = Router()


export {router}