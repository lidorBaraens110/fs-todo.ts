import { Router } from 'express';
import { getAllMissionByUser, addMission, deleteMission, editMission } from '../controller/todo';

const router = Router();

router.get('/:user', getAllMissionByUser);
router.post('/', addMission);
router.delete('/', deleteMission);
router.put('/:id', editMission);

export default router