
import { Router } from "express";
//import {booksRoute} from './Books/books'
import {routebookmgr} from './Books/routeBookMgr'
import {tvshowRoute} from './TVShows/tvshows'

export const routemgr = Router();

//routemgr.use("/book",booksRoute);
routemgr.use("/book",routebookmgr);
routemgr.use("/tvshow",tvshowRoute);