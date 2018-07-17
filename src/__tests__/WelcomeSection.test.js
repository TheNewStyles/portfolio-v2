import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeSection from '../components/WelcomeSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
