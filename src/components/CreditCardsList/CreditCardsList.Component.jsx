import React from 'react';
import { Table } from 'react-bootstrap';

const CreditCardsListComponent = ({
    cards
}) => {
    return (
        <div className='mt-4 fs-5'>
            <p>Existing Cards</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='small'>Name</th>
                        <th className='small'>Card Number</th>
                        <th className='small'>Balance</th>
                        <th className='small'>Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cards?.map?.(card => (
                            <tr key={card?.id}>
                                <td className='small'>{card?.name}</td>
                                <td className='small'>{card?.card_number}</td>
                                <td className='small'>£{card?.balance}</td>
                                <td className='small'>£{card?.card_limit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CreditCardsListComponent;