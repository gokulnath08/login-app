import React, { useState } from "react";
import "./expenseApp.css";
import AuthContext from "../../Context/AuthContext";
import Card from "../Card/card";
import ExpenseDate from "../ExpenseDate/expenseDate";

function ExpenseApp(dataFromApp) {
  const context = React.useContext(AuthContext);
  const [title, newTitle] = useState(dataFromApp.title);
  const [flag, setFlag] = useState(false);
  const clickEvent = () => {
    setFlag(true);
  };

  const getValueOfTextBox = (event) => {
    global.changedTitle = event.target.value;
  };

  const updateDoneHandler = () => {
    setFlag(false);
    newTitle(global.changedTitle);
  };

  const updateCancelHandler = () => {
    setFlag(false);
    newTitle(title);
  };
  const DeleteEvent = () => {
    context.onDelete(dataFromApp.id);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={dataFromApp.date} />
      <div className="expense-item__description">
        {flag === true && (
          <div>
            <input
              className="text-input"
              type="text"
              onChange={getValueOfTextBox}
            />
            <button onClick={updateDoneHandler}>Update</button>
            <button
              onClick={updateCancelHandler}
              style={{ backgroundColor: "red" }}
            >
              Cancel
            </button>
          </div>
        )}
        {flag === false && <h2>{title}</h2>}
        <div className="expense-item__price">{dataFromApp.amount}</div>
        <button onClick={clickEvent}>Edit</button>
        <button onClick={DeleteEvent}>Del</button>
      </div>
    </Card>
  );
}

export default ExpenseApp;
