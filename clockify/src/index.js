import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider as ReduxProvider} from 'react-redux';
import {Store} from '../src/Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={Store}>
    <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);


