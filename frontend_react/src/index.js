import React from 'react';

import { createRoot } from 'react-dom/client';


import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
// import { BrowserRouter as Router } from 'react-router-dom';

// const root = createRoot(document.getElementById('root'));

root.render(
      <App tab= 'home'/>
);
