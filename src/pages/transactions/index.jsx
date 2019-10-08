import React from "react";
import ServicesExpensesBarChart from "../../components/services-expenses-bar-chart";
import DonutChart from "../../components/donut-chart";
import styles from "./styles.module.scss";
import FilterButton from "../../components/filter-button";
import ValueBillboard from "../../components/value-billboard";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const TransactionsPage = () => {
  const data = useSelector(state => state.transactions);
  const dispatch = useDispatch();

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

  const handleFilter = dateSpan => {
    const today = moment().format("YYYY-MM-DD");

    let dateRangeStart, dateRangeFinish;

    if (dateSpan === "day") {
      dateRangeStart = today;
      dateRangeFinish = today;
    } else if (dateSpan === "week") {
      dateRangeStart = moment()
        .subtract(1, "weeks")
        .format("YYYY-MM-DD");

      dateRangeFinish = today;

      moment().format("DD-MM-YYYY");
    } else if (dateSpan === "month") {
      dateRangeStart = moment()
        .subtract(1, "months")
        .format("YYYY-MM-DD");

      dateRangeFinish = today;
    }

    console.log(
      " dateRangeStart dateRangeFinish",
      dateRangeStart,
      dateRangeFinish
    );

    //dispatch the filter function
    dispatch({
      type: "FILTER_DATE",
      payload: {
        dateRangeStart: dateRangeStart,
        dateRangeFinish: dateRangeFinish
      }
    });
  };

  const servicesMinusExpenses = servicesValue - expensesValue;

  return (
    <React.Fragment>
      <div className={styles.filterButtonRow}>
        <FilterButton
          text="HOJE"
          onClick={() => {
            handleFilter("day");
          }}
        />
        <FilterButton
          text="ÚLTIMA SEMANA"
          onClick={() => {
            handleFilter("week");
          }}
        />
        <FilterButton
          text="ÚLTIMO MÊS"
          onClick={() => {
            handleFilter("month");
          }}
        />
        <FilterButton text="OUTRO PERÍODO" />
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col">
            <ValueBillboard
              label="VALOR TOTAL"
              valuePrefix="R$"
              value={servicesMinusExpenses}
            />
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className={styles.chartsContainer}>
          <div>
            <DonutChart data={data} />
          </div>
          <div>
            <ServicesExpensesBarChart
              servicesValue={servicesValue}
              expensesValue={expensesValue}
              totalValue={ServicesExpensesTotalValue}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TransactionsPage;
