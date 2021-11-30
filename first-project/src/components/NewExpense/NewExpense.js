import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

function NewExpense(props) {
  function addExpenseDateHandler(data) {
    const expenseDateWithID = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpenseDateWithID(expenseDateWithID);
  }

  return (
    <div className={classes.newExpense}>
      <ExpenseForm onAddExpenseDate={addExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
