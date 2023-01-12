import React from 'react';
import AddCreditCardSection from './components/AddCreditCard';
import CreditCardsListSection from './components/CreditCardsList';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container 
            fluid
            className='p-2'>
                <p className='fw-normal fs-4'>
                    Credit Card System
                </p>
                <AddCreditCardSection />
                <CreditCardsListSection />
        </Container>
    );
};

export default App;