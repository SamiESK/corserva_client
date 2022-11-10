import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SaleTableRow = (props) => {
  const { uuid, productName, description, price } = props.obj;

  const deleteSale = () => {
    axios
      .delete(`http://localhost:3001/sales/${uuid}`)
      .then((res) => {
        if (res.status === 200) {
          alert('Sale successfully deleted');
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert('Something went wrong'));
  };

  return (
    <tr>
      <td>{productName}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>
        <Link className="edit-link" to={`/EditSale/${uuid}`}>
          Edit
        </Link>
        <Button onClick={deleteSale} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SaleTableRow;
