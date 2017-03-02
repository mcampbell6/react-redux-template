import React from 'react';
import App from '../../app/components/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
