import { Router } from 'express';
import { display ,create_user  , get_data} from '../conttoller/signup_handler.js';
const router = Router();
router
.get('/signup', display)
.get('/get_data', get_data)
.post('/signup', create_user)

export default router;
