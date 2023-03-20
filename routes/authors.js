import { Router } from "express";
import { checkAuth } from "../middleware/auth.js";
import * as authorsCtrl from '../controllers/authors';

const router = Router()


export {router}