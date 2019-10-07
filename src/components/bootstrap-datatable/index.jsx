import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { connect } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/ico/ic_search.svg";

import styles from "./styles.module.scss";

class BootstrapDatatable extends Component {
  render() {
    const { SearchBar } = Search;
    const customers = this.props.data;

    const columns = [
      {
        dataField: "id",
        text: "ID",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      },
      {
        dataField: "name",
        text: "NOME",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      },
      {
        dataField: "document",
        text: "DOCUMENTO",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      },
      {
        dataField: "birthdate",
        text: "DATA NASCIMENTO",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      },
      {
        dataField: "customer_since",
        text: "CLIENTE DESDE",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      },
      {
        dataField: "last_purchase",
        text: "ÚLTIMA COMPRA",
        classes: styles.rowItem,
        headerClasses: styles.columnItem
      }
    ];

    return (
      <ToolkitProvider keyField="id" data={customers} columns={columns} search>
        {props => (
          <div>
            <SearchIcon className={styles.searchIcon} />
            <SearchBar
              {...props.searchProps}
              placeholder="PESQUISAR NOME"
              className={styles.searchField}
            />
            <BootstrapTable
              {...props.baseProps}
              striped
              bordered={false}
              hover
              keyField="id"
              data={customers}
              columns={columns}
              noDataIndication="Tabela Vazia"
              headerClasses={styles.headers}
              rowClasses={styles.rows}
            />
          </div>
        )}
      </ToolkitProvider>
    );
  }
}

export default BootstrapDatatable;
