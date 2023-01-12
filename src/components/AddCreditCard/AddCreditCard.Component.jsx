import { Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Form, Row, Col } from 'react-bootstrap';
import AddCreditCardSchema from './AddCreditCard.Schema';

const AddCreditCardComponent = ({
    onSubmit,
}) => {
    return (
        <div>
            <p className='fs-5'>Add</p>
            <Row>
                <Col md={3}>
                    <Formik
                        initialValues={{name: '', cardNumber: '', limit: ''}}
                        validationSchema={AddCreditCardSchema}
                        onSubmit={onSubmit}>
                        {({ 
                            values, 
                            errors, 
                            touched, 
                            isSubmitting, 
                            handleSubmit,
                            handleBlur,
                            handleChange, 
                        }) => (
                            <Form 
                                onSubmit={handleSubmit}>
                                <FormGroup className='mb-3'>
                                    <Form.Label>name</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name='name'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {errors.name && touched.name && <div className='text-danger small text-end'>{errors.name}</div>}
                                </FormGroup>
                                
                                <FormGroup className='mb-3'>
                                    <Form.Label>cardNumber</Form.Label>
                                    <Form.Control 
                                        type='text'
                                        name='cardNumber'
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {errors.cardNumber && touched.cardNumber && <div className='text-danger small text-end'>{errors.cardNumber}</div>}
                                </FormGroup>

                                <FormGroup className='mb-3'>
                                    <Form.Label>limit</Form.Label>
                                    <Form.Control 
                                        type='number'
                                        name='limit'
                                        value={values.limit}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {errors.limit && touched.limit && <div className='text-danger small text-end'>{errors.limit}</div>}
                                </FormGroup>

                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'Please wait...' : 'Add'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </div>
    );
};

export default AddCreditCardComponent;