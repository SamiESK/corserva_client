
// EditSale Component for update sale data
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import SaleForm from "./SaleForm";
import { useParams } from "react-router-dom";

// EditSale Component
const EditSale = (props) => {
  const { uuid } = useParams();
  const [formValues, setFormValues] = useState({
    productName: "",
    description: "",
    price: "",
  });
    
  // onSubmit handler
  const onSubmit = (saleObject) => {
    axios
      .put(
        "http://localhost:3001/sales/" +
          `${uuid}`,
          saleObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Sale successfully updated");
        }
      })
      .catch((err) => console.log(err));
  };
  
  // Load data from server and reinitialize sale form
  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/sales/" 
        + `${uuid}`
      )
      .then((res) => {
        const { productName, description, price } = res.data;
        setFormValues({ productName, description, price });
      })
      .catch((err) => console.log(err));
  }, [uuid]);
  
  // Return sale form
  return (
    <SaleForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Sale
    </SaleForm>
  );
};
  
// Export EditSale Component
export default EditSale;