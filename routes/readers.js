import { Router } from "express";
import { checkAuth } from "../middleware/auth";
import * as readersCtrl from '../controllers/readers';

const router = Router()


export {router}