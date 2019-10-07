import { createReducer } from "reduxsauce";

const INITIAL_STATE = [
  {
    id: 4512,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-07-26 10:00:40.000000"
  },
  {
    id: 4513,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-07-26 10:10:40.000000"
  },
  {
    id: 4514,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-07-26 10:12:40.000000"
  },
  {
    id: 4515,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-07-27 10:12:40.000000"
  },
  {
    id: 4516,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-08-27 10:12:40.000000"
  },
  {
    id: 4517,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-08-27 10:12:40.000000"
  },
  {
    id: 4518,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-04-10 14:12:40.000000"
  },
  {
    id: 4519,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-04-10 15:12:40.000000"
  },
  {
    id: 4520,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-04-10 15:16:40.000000"
  },
  {
    id: 4521,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-04-10 15:28:40.000000"
  },
  {
    id: 5512,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-06-10 10:00:40.000000"
  },
  {
    id: 5513,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-07-11 10:10:40.000000"
  },
  {
    id: 5514,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-16 10:12:40.000000"
  },
  {
    id: 5515,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-17 10:12:40.000000"
  },
  {
    id: 5516,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-17 10:50:40.000000"
  },
  {
    id: 5512,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-06-10 10:00:40.000000"
  },
  {
    id: 5513,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-07-11 10:10:40.000000"
  },
  {
    id: 5514,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-16 10:12:40.000000"
  },
  {
    id: 5515,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-17 10:12:40.000000"
  },
  {
    id: 5516,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-17 10:50:40.000000"
  },
  {
    id: 6512,
    amount: 2711.9,
    product_id: 29,
    type: "Despesas",
    product_name: "Folha de pagamento",
    time: "2019-06-10 10:00:40.000000"
  }
];

export default createReducer(INITIAL_STATE, {});
