import express from 'express';
import ExpensesController from '../controllers/ExpensesController';

const app = express();
const expensesController = new ExpensesController();
const { getExpenses, addExpenses } = expensesController;

app.route('/')
  .get(getExpenses.bind(expensesController))
  .post(addExpenses.bind(ExpensesController));

export default app;