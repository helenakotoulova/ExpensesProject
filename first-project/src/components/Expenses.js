import ExpenseItem from "./ExpenseItem";
import classes from "./Expenses.module.css";

function Expenses(props) {
  return (
    <div className={classes.expenses}>
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;

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
