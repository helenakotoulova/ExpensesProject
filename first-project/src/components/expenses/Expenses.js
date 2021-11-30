import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
//import Card from "../ui/Card";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2020");

  function changeYearHandler(filteredYear) {
    setChosenYear(filteredYear);
    console.log(chosenYear)
    console.log(filteredYear)
    //props.onFilterYear(chosenYear);
    props.onFilterYear(filteredYear) // on ten rok ale dal neposouva! nechava ho v Expenses.js
  }

  return (
    //<Card>
    <div className={classes.expenses}>
      <ExpenseFilter selected={chosenYear} onChangeYear={changeYearHandler} />
      <div>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </div>
    </div>
    // </Card>
  );
}

export default Expenses;

/*
DULEZITA POZNAMKA NA DALSI TWO-WAY BINDING:

const [chosenYear, setChosenYear] = useState('2020');
zvolime initial value - 2020.
Tu pak budeme i passovat zpet do Expense Filteru - zde napiseme: <ExpenseFilter selected={chosenYear} .. />
A pak v ExpenseFilter.js hodime:
<select value={props.selected}>

*/

/*
Slo by vyresit i takto:

function Expenses(props) {
return(
    <div className={classes.expenses}>
        <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
    </div>
)
}

A pak v App:

const expenses = [
    {...},
    {...},
]

<Expenses items={expenses} />

*/
