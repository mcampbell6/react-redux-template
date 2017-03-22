import React from 'react';
import App from '../../app/components/App';
import { shallow } from 'enzyme';

it('renders the App component without crashing', () => {
  shallow(<App />);
});
