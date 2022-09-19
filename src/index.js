import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import  store  from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
const baseURL = "https://twitterapis.herokuapp.com/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 5000,
  headers: {
    "content-Type": "application/json",
    accept:"application/json",
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
