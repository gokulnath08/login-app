import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseApp/expenseItem";
import Card from "./components/Card/card";
import NewExpense from "./components/NewExpense/newExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./components/ExpenseApp/ExpenseChart";
import AuthContext from "./Context/AuthContext";

const expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.12,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, additionalExpense] = useState(expense);
  const addExpenseHandler = (newExpense) => {
    //const exp = [...expenses, newExpense]; //to add as last entry
    additionalExpense((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  const [Year, YearFiltered] = useState("2021");
  const FilterChangeHandler = (selectedYear) => {
    YearFiltered(selectedYear);
  };

  let filteredData = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === Year;
  });

  const onDeleteItem = (keyValue) => {
    additionalExpense(
      expenses.filter((expense) => {
        return expense.id !== keyValue;
      })
    );
  };
  return (
    <AuthContext.Provider
      value={{
        onDelete: onDeleteItem,
      }}
    >
      <Card className="expensesApp">
        <NewExpense onNewExpense={addExpenseHandler} />
        <ExpensesFilter selected={Year} onChangeFilter={FilterChangeHandler} />
        {filteredData.length > 0 && <ExpenseChart expenseData={filteredData} />}
        <ExpenseItem expenseData={filteredData} onDelete={onDeleteItem} />
      </Card>
    </AuthContext.Provider>
  );
};
export default App;
