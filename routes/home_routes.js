import { Router } from "express";
import { display_allpost ,update_post} from "../conttoller/homecontroller.js";
const router = Router();
router
.get('/home/all_posts',display_allpost)
.post('/update_post',update_post);

export default router;
