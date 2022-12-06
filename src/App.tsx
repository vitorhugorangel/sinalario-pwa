import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalRoute } from './routes/GlobalRoute';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalRoute />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
