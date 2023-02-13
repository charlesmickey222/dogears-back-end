import { Router } from "express";
import { checkAuth } from "../middleware/auth";
import * as discussionsCtrl from '../controllers/discussions';

const router = Router()


export {router}