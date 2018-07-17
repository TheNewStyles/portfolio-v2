import React from 'react';
import ReactDOM from 'react-dom';

import ProjectTile from '../components/ProjectTile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectTile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
