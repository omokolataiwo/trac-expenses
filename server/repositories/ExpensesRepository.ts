import firebase from 'firebase';
import ExpenseDTO from '../models/dto/ExpensesDTO';

const apiKey = process.env.FIREBASE_API_KEY;

firebase.initializeApp({
  apiKey,
  authDomain: "trac-expenses.firebaseapp.com",
  databaseURL: "https://trac-expenses.firebaseio.com",
  projectId: "trac-expenses",
  storageBucket: "trac-expenses.appspot.com",
  messagingSenderId: "1005378896197",
  appId: "1:1005378896197:web:115bf628baac5c54"
});

export default class ExpensesRepository {
  ref: any;

  constructor() {
    this.ref = firebase.database().ref('expenses');
  }

  public getExpenses(): ExpenseDTO[] {
    return [{description: '', amount: '', createdAt: ''}]
  }
  
  public addExpenses(expenses: ExpenseDTO): void {
    console.log(this.ref);
  }
}