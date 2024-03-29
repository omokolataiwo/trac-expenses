import firebase from 'firebase';
import ExpenseDTO from '../models/dto/ExpensesDTO';
import dotEnv from 'dotenv';

dotEnv.config();
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
    this.ref = firebase.database().ref();
  }

  
  public getExpenses(): ExpenseDTO[] {
    let expenses: ExpenseDTO[] = [];
    this.ref.on('value', (snapshot: any) => {
      const expensesObject = snapshot.val();
      expenses = expensesObject ? expensesObject.expenses : [];
    }, (error: any) => {
      console.log(error.code);
    });

    return expenses;
  }
  
  public addExpenses(expenses: ExpenseDTO): void {
    console.log(this.ref);
  }
}
