import React from "react";
import BootstrapDatatable from "../../components/bootstrap-datatable";
import { useSelector } from "react-redux";

const CustomerPage = () => {
  const data = useSelector(state => state.customers);

  return <BootstrapDatatable data={data} />;
};

export default CustomerPage;
