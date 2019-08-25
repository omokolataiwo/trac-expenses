import { Router } from 'express';
import ExpensesRouter from './ExpensesRoute';

const router = Router();
router.use('/expenses', ExpensesRouter);
router.use('/', (_, res) => res.sendStatus(200));

export default router;