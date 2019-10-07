import React from "react";
import ServicesExpensesBarChart from "../../components/services-expenses-bar-chart";
import DonutChart from "../../components/donut-chart";
import styles from "./styles.module.scss";
import FilterButton from "../../components/filter-button";
import ValueBillboard from "../../components/value-billboard";
import { useSelector } from "react-redux";

const TransactionsPage = () => {
  const data = useSelector(state => state.transactions);

  let ServicesExpensesTotalValue = 0,
    servicesValue = 0,
    expensesValue = 0;

  data.map(transaction => {
    ServicesExpensesTotalValue += transaction.amount;
    if (transaction.type === "Receitas") {
      servicesValue += transaction.amount;
    } else if (transaction.type === "Despesas") {
      expensesValue += transaction.amount;
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <FilterButton text="HOJE" />
          <FilterButton text="ÚLTIMA SEMANA" />
          <FilterButton text="ÚLTIMO MÊS" />
          <FilterButton text="OUTRO PERÍODO" />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <ValueBillboard label="VALOR TOTAL" valuePrefix="R$" value={100} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <DonutChart data={data} />
        </div>
        <div className="col">
          <ServicesExpensesBarChart
            servicesValue={servicesValue}
            expensesValue={expensesValue}
            totalValue={ServicesExpensesTotalValue}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
