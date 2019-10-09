import { createReducer, createActions } from "reduxsauce";
import moment from "moment";

/**
 * Criando os action types e os creators
 */
export const { Types, Creators } = createActions({
  filterDate: ["dateRangeStart", "dateRangeFinish"]
});

const INITIAL_STATE = [
  {
    id: 4512,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-08"
  },
  {
    id: 4513,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-09"
  },
  {
    id: 4514,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-10 "
  },
  {
    id: 4515,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-01"
  },
  {
    id: 4516,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-12"
  },
  {
    id: 4517,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-13"
  },
  {
    id: 4518,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-14"
  },
  {
    id: 4519,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-15"
  },
  {
    id: 4520,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-16"
  },
  {
    id: 4521,
    amount: 644.52,
    type: "Receitas",
    product_id: 26,
    product_name: "Banho & Tosa",
    time: "2019-10-17"
  },
  {
    id: 5512,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-10-18"
  },
  {
    id: 5513,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-10-11"
  },
  {
    id: 5514,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-16"
  },
  {
    id: 5515,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-17"
  },
  {
    id: 5516,
    amount: 773.43,
    type: "Receitas",
    product_id: 27,
    product_name: "Consultas",
    time: "2019-08-17"
  },
  {
    id: 5512,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-06-10"
  },
  {
    id: 5513,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-10-11"
  },
  {
    id: 5514,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-16"
  },
  {
    id: 5515,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-17"
  },
  {
    id: 5516,
    amount: 515.62,
    product_id: 28,
    type: "Receitas",
    product_name: "Medicamentos",
    time: "2019-08-17"
  },
  {
    id: 6512,
    amount: 2711.9,
    product_id: 29,
    type: "Despesas",
    product_name: "Folha de pagamento",
    time: "2019-09-30"
  }
];

const filter = (state = INITIAL_STATE, action) =>
  INITIAL_STATE.filter(transaction => {
    if (
      moment(action.payload.dateRangeStart).isSameOrBefore(transaction.time) &&
      moment(action.payload.dateRangeFinish).isSameOrAfter(transaction.time)
    )
      return transaction;
  });

export default createReducer(INITIAL_STATE, {
  [Types.FILTER_DATE]: filter
});
