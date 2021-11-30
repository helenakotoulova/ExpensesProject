import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
//import Card from "../ui/Card";

function ExpenseItem(props) {
  return (
    //<Card>
    <div className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <div className={classes.price}>${props.amount}</div>
      </div>
    </div>
    //</Card>
  );
}

export default ExpenseItem;

/*
const [title,setTitle] = useState(props.title);
  function clickHandler() {
      return(setTitle('updated'))   // pozn: je jedno jestli tam dam ten return nebo ne.
  }

return (
      <div className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.description}>
          <h2>{title}</h2>
          <div className={classes.price}>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </div>
      )

ten Use State funguje pro kazdou tu polozku expense samostatne. 
pri initial renderu se vyrenderuji vsechny polozky, po kliknuti na change title
u jedne z polozek, se opetovne vyrenderuje jen ta konkretni polozka.

useState se pise v const, aby se nemohl prepsat bez setTitle.
tzn nejde udelat title=..;

useState can be updated also because of a timer (set with SetTimeout()) expired.
*/
