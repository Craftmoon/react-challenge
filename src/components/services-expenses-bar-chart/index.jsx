import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const ServicesExpensesBarChart = ({
  servicesValue,
  expensesValue,
  totalValue
}) => {
  const getPercentage = (value, total) => {
    return Math.round((value * 100) / total);
  };

  const values = {
    options: {
      colors: ["#56daa8", "#ef5761"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded"
        }
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "left",
        fontSize: "10px",
        fontFamily: "Avenir Roman",
        width: 330,
        height: 110,
        formatter: function(seriesName, opts) {
          return [
            "<span style='display:flex;justify-content:space-between;width:260px;'> <span>" +
              seriesName +
              "</span>" +
              "<span> <strong> R$ " +
              opts.w.globals.series[opts.seriesIndex] +
              "  (" +
              getPercentage(
                opts.w.globals.series[opts.seriesIndex],
                totalValue
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
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        type: "numeric",
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: true,
          formatter: value => {
            return "R$ " + value;
          }
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "R$ " + val;
          }
        }
      }
    },
    series: [
      {
        name: "RECEITAS",
        data: [servicesValue.toFixed(2)]
      },
      {
        name: "DESPESAS ",
        data: [expensesValue.toFixed(2)]
      }
    ]
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={values.options}
            series={values.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesExpensesBarChart;
