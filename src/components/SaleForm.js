import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Button } from 'react-bootstrap';

const SaleForm = (props) => {
    const validationSchema = Yup.object().shape({
        productName: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
    });
    // console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...{ props }} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <font size="5">Product Name</font>
                        <Field
                            name="productName"
                            type="text"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="productName"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <font size="5">Description</font>
                        <Field
                            name="description"
                            type="text"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="description"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <font size="5">Price</font>
                        <Field
                            name="price"
                            type="number"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="price"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br />
                    <Button
                        callname="submit-btn"
                        size="lg"
                        block="block"
                        type="submit"
                    >
                        {{ props }.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default SaleForm;
