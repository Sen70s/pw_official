import React from 'react';
import ReactDOM from 'react-dom/client';
import Helmet from 'react-helmet';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>上进双创工作室 - PointerWander</title>
      <meta name="description" content="PointerWander" />
      <link rel="icon" href="./img/logo_pointerwander.png" />
    </Helmet>
    <App />
  </React.StrictMode>,
);
