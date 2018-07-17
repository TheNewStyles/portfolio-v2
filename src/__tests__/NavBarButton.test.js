import React from 'react';
import ReactDOM from 'react-dom';

import NavBarButton from '../components/NavBarButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBarButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
