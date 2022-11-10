import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import SaleTableRow from './SaleTableRow.component';

const SaleList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/sales/')
      .then(({ data }) => {
        setSales(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () =>
    sales.map((res, i) => <SaleTableRow obj={res} key={i} />);

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>USD $</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default SaleList;
