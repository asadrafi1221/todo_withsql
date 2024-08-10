import { Router } from "express";
import { displayhome ,user_posts} from "../conttoller/homecontroller.js";
const router = Router();

router.get('/home', displayhome)
.post('/userpost',user_posts)

export default router;
