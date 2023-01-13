import { render } from '@testing-library/react';

import CreditCardsList from './CreditCardsList.Component';

describe('CreditCardsList Test suite', () => {
  it('It should render CreditCardsList component', () => {
    render(<CreditCardsList  />);
  });
});