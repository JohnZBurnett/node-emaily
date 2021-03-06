import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'materialize-css/dist/css/materialize.min.css'; 
import reduxThunk from 'redux-thunk';


import App from './components/App'; 
import reducers from './reducers'; 
import axios from 'axios'; 
window.axios = axios; 

// dummy reducer to start 
const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
); 

console.log('Stripe key is: ', process.env.REACT_APP_STRIPE_KEY)
console.log('Environemnt is: ', process.env.NODE_ENV)