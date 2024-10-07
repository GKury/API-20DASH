import {Router} from 'express';
import productController from '../controllers/ProductController';

const router = new Router();

router.get('/', productController.index);
router.patch('/:id', productController.update);
router.get('/:id', productController.show);

export default router;