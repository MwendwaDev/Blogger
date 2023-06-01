import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GCMS_API,
  cache: new InMemoryCache(),
  headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GCMS_AUTH}`,
    },
});


ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

