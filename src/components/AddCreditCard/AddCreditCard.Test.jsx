import { render } from '@testing-library/react';

import AddCreditCard from './AddCreditCard.Component';

describe('AddCreditCard Test suite', () => {
  it('It should render AddCreditCard component', () => {
    render(<AddCreditCard  />);
  });
});