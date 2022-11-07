
// CreateSale Component for add new sale
  
// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import SaleForm from "./SaleForm";
  
// CreateSale Component
const CreateSale = () => {
  const [formValues] = 
    useState({ productName: '', description: '', price: '' })
  // onSubmit handler
  const onSubmit = saleObject => {
    axios.post(
    'http://localhost:3001/sales', 
    saleObject)
      .then(res => {
        if (res.status === 201)
          alert('Sale successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return sale form
  return(
    <SaleForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Sale!
    </SaleForm>
  )
}
  
// Export CreateStudent Component
export default CreateSale;