import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import Text from "../text";
import NumberFormat from "react-number-format";
import { getPercentage } from "../../utils/getPercentage";

const DonutChart = ({ data }) => {
  const transactions = data.filter(
    transaction => transaction.type === "Receitas"
  );
  const productIds = [
    ...new Set(transactions.map(transaction => transaction.product_id))
  ];

  const productNames = [
    ...new Set(transactions.map(transaction => transaction.product_name))
  ];

  const total = transactions.reduce(function(prevVal, elem) {
    return prevVal + elem.amount;
  }, 0);

  let totalValues = [];

  productIds.map(productId => {
    let uniqueProducts = transactions.filter(
      transaction => transaction.product_id === productId
    );
    let sumValues = uniqueProducts.reduce(function(prevVal, elem) {
      return prevVal + elem.amount;
    }, 0);

    totalValues.push(sumValues);
  });

  const values = {
    chartOptions: {
      colors: ["#c12fd8", "#7628da", "#5282ff"],
      labels: productNames,
      plotOptions: {
        pie: {
          customScale: 1.0
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "left",
        fontSize: "10px",
        fontFamily: "Avenir Roman",
        width: 330,
        height: 160,
        formatter: function(seriesName, opts) {
          return [
            "<span style='display:flex;justify-content:space-between;width:260px;'> <span>" +
              seriesName +
              "</span>" +
              "<span> <strong> R$ " +
              opts.w.globals.series[opts.seriesIndex].toFixed(2) +
              "  (" +
              getPercentage(
                opts.w.globals.series[opts.seriesIndex].toFixed(2),
                total
              ) +
              "%)" +
              "</strong></span>" +
              "</span>"
          ];
        },
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false
        },
        markers: {
          width: 15,
          height: 15,
          strokeWidth: 0,
          strokeColor: "#fff",
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      }
    },
    series: totalValues
  };

  return (
    <div className="donut">
      <Chart
        options={values.chartOptions}
        series={values.series}
        labels={values.labels}
        type="donut"
        width="380"
      />
      <div className={styles.totalContainer}>
        <Text
          font="avenir black"
          fontSize={12}
          color="#4A4A4A"
          textClass={styles.totalText}
        >
          <div>{`TOTAL: `}</div>
          <div>
            <NumberFormat
              thousandSeparator="."
              displayType={"text"}
              decimalSeparator=","
              prefix="R$ "
              suffix=" (100%)"
              value={total}
              decimalScale={2}
            />
          </div>
        </Text>
      </div>
    </div>
  );
};

export default DonutChart;
