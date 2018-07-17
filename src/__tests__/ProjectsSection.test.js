import React from 'react';
import ReactDOM from 'react-dom';

import ProjectsSection from '../components/ProjectsSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
