import React, { useEffect, useState } from 'react';
import AddCreditCardSection from './components/AddCreditCard';
import CreditCardsListSection from './components/CreditCardsList';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

const App = () => {
    const [cards, setCards] = useState();

    useEffect(() => {
        (async() => {
            try{
                const response = await axios.get('http://localhost:8080/credit-card/all');
                setCards(response?.data);
            }catch(e){}
        })()
    }, [])

    return (
        <>
            <Container 
                fluid
                className='p-2'>
                    <p className='fw-normal fs-4'>
                        Credit Card System
                    </p>
                    <AddCreditCardSection setCards={setCards}/>
                    <CreditCardsListSection cards={cards}/>
            </Container>
            <Toaster />
        </>
    );
};

export default App;