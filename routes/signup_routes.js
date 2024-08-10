import { Router } from "express";
import {create_user , display ,get_data} from  '../conttoller/signup_handler.js';
import router from "./home_routes.js";
import { displayhome } from "../conttoller/homecontroller.js";
import { create } from "domain";

router
.get('/helo',display)
.get('/get_data',get_data)
.post('/signup',create_user);


export default router;
