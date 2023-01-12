import AddCreditCardComponent from './AddCreditCard.Component';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddCreditCardContainer = ({setCards}) => {
    const onSubmit = async (values, { resetForm, setSubmitting }) => {
        try{
            const response = await axios.post('http://localhost:8080/credit-card/add', {
                "name": values?.name,
                "card_number": values?.cardNumber,
                "card_limit": values?.limit,
            });
            setCards(st => [response.data, ...st])
            toast('Credit card added');
            setSubmitting();
            resetForm();
        }catch(e) {toast(e?.message || 'Something went wrong!')}
    }

    return <AddCreditCardComponent onSubmit={onSubmit} />
};

export default AddCreditCardContainer;