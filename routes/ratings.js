import { Router } from "express";
import { checkAuth } from "../middleware/auth";
import * as ratingsCtrl from '../controllers/ratings';

const router = Router()


export {router}