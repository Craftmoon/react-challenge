import React from "react";
import styles from "./styles.module.scss";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerPage from "../../pages/customers";
import TransactionsPage from "../../pages/transactions";
import Nav from "../nav";

const PageContent = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex-row wrapper-nav">
          <Nav />
          <div className="wrapper-filtro">
            <Route exact path="/customers" component={CustomerPage} />
            <Route exact path="/transactions" component={TransactionsPage} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default PageContent;
