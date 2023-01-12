import React from 'react';
import { Table } from 'react-bootstrap';

const CreditCardsListComponent = () => {
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
                    <tr>
                        <td className='small'>Alice</td>
                        <td className='small'>2323 3433 6567 2323</td>
                        <td className='small'>£100</td>
                        <td className='small'>£2000</td>
                    </tr>
                    <tr>
                        <td className='small'>Bob</td>
                        <td className='small'>2323 3433 6567 2323</td>
                        <td className='small'>£100</td>
                        <td className='small'>£2000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default CreditCardsListComponent;