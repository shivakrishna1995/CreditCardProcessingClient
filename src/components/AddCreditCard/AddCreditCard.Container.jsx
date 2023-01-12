import AddCreditCardComponent from './AddCreditCard.Component';

const AddCreditCardContainer = () => {

    const onSubmit = (values, { resetForm, setSubmitting }) => {
        setSubmitting();
    }

    return <AddCreditCardComponent onSubmit={onSubmit}/>
};

export default AddCreditCardContainer;