import { Response, Request } from 'express';
import ExpensesRepository from '../repositories/ExpensesRepository'
import ExpensesDTO from '../models/dto/ExpensesDTO';

export default class {
  userModel: ExpensesRepository;
  constructor() {
    this.userModel = new ExpensesRepository();
  }

  public getExpenses(req: Request, res: Response) {
    const expeses: ExpensesDTO[] = this.userModel.getExpenses();
    res.status(200).json(expeses);
  }

  public addExpenses(req: Request, res: Response) {
    const newExpenses: ExpensesDTO = {
      description: 'Transport',
      amount: '400',
      createdAt: '2/10/2019'
    };

    this.userModel.addExpenses(newExpenses);
    return res.status(202).json({});
  }
}