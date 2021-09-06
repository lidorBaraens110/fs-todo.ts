import { Router } from 'express';
import { register, login, logout, editUser } from '../controller/user';

const router = Router();

router.put('/:user', editUser);
router.post('/register', register);
router.post('/', login);
router.post('/', logout);

export default router