import { Router } from 'express';
import { register, login, editUser } from '../controller/user';

const router = Router();

router.post('/editUser', editUser);
router.post('/register', register);
router.post('/login', login);

export default router