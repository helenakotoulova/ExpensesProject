import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <div className={classes.expenseItem}>
      <ExpenseDate date={props.date}/>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <div className={classes.price}>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/* POZN:
1.
const expenseDate = new Date (2021,2,28); // mesice zacinaji indexem 0, tzn brezen je 2
<div>{expenseDate.toISOString()}</div>
kdyz nedam za expenseDate to toISOString, tak error, protoze Date je spec. objekct
a kdyz nedam za toISOString() ty zavorky, tak se to nespusti a nezobrazi se mi datum vubec.

2. 
toLocaleString()
getFullYear()
jsou normalni JS metody (funkce).
*/