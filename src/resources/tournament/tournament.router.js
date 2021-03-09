import Router from 'express';
import mockController from './tournament.controller'

const router = Router();

router.route("/")
    .get(mockController)
    .post(mockController)

router.route("/:id")
    .get(mockController)
    .put(mockController)
    .delete(mockController)

export default router;