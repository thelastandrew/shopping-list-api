import Router from 'express';
import itemsController from '../controllers/ItemsController.js';

const router = new Router();

router.post('/items', itemsController.create);
router.get('/items', itemsController.getAll);
router.put('/items', itemsController.update);
router.delete('/items/:id', itemsController.delete);

export default router;