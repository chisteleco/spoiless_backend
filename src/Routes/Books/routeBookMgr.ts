
import { Router } from "express";
import {booksRoute} from './books'
import {charactersRoute} from './characters'
import {chapterRoute} from './chapter'


export const routebookmgr = Router();

routebookmgr.use("/bookinfo",booksRoute);
routebookmgr.use("/character",charactersRoute);
routebookmgr.use("/chapter",chapterRoute);