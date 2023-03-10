import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

// export default Expenses;

// {
//   /* <ExpenseItem
//     title={expenses[0].title}
//     amount={expenses[0].amount}
//     date={expenses[0].date}
//     className="expense-item"
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[1].title}
//     amount={expenses[1].amount}
//     date={expenses[1].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[2].title}
//     amount={expenses[2].amount}
//     date={expenses[2].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[3].title}
//     amount={expenses[3].amount}
//     date={expenses[3].date}
//   ></ExpenseItem> */
// }
