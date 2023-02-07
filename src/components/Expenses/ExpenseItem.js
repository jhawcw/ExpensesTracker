import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  //   const year = props.date.getFullYear();
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = "297.48";
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
