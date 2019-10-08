import React from "react";
import Chart from "react-apexcharts";
import styles from "./styles.module.scss";
import { getPercentage } from "../../utils/getPercentage";
import Text from "../text";

const ServicesExpensesBarChart = ({
  servicesValue,
  expensesValue,
  totalValue
}) => {
  const values = {
    options: {
      colors: ["#56daa8", "#ef5761"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
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
        offsetX: 30,
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
    <div className={styles.barChartContainer}>
      <Text
        font="din condensed bold"
        fontSize={25}
        color="#737689"
        textClass={styles.totalText}
      >
        DESPESAS X RECEITAS
      </Text>
      <Chart
        options={values.options}
        series={values.series}
        type="bar"
        width="380"
        height="380"
      />
    </div>
  );
};

export default ServicesExpensesBarChart;
