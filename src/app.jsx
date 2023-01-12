import React from 'react';
import AddCreditCardSection from './components/AddCreditCard';
import CreditCardsListSection from './components/CreditCardsList';
import { Container } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Container 
                fluid
                className='p-2'>
                    <p className='fw-normal fs-4'>
                        Credit Card System
                    </p>
                    <AddCreditCardSection />
                    <CreditCardsListSection />
            </Container>
        </QueryClientProvider>
    );
};

export default App;