import * as Yup from 'yup';
import valid from 'card-validator';

const AddCreditCardSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(1, 'Please provide valid name'),
    cardNumber: Yup.string()
        .required('Card number is required')
        .test(
            'test-number',
            'Credit Card number is invalid',
            value => valid.number(value).isValid
        ),
    limit: Yup.number()
        .required('Provide card limit')
        .min(0, 'Card limit must be more than or equal to 0')
});

export default AddCreditCardSchema;