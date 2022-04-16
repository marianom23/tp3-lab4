import {Router} from 'express';
import { getEmpleados, addEmpleado, updateEmpleado, deleteEmpleado, getEmpleadoByID } from './controlador/controlador';

const router = Router();

router.get('/test', (req, res) => res.send("Hola Mundo !"));

router.get('/articulos', getEmpleados)
router.post('/articulos', addEmpleado)
router.put('/articulos/update', updateEmpleado)
router.delete('/articulos/:idParam', deleteEmpleado)
router.get('/articulos/:idParam', getEmpleadoByID)

export default router;