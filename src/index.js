import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardContext from './component/contextApi/DashboardContext';

ReactDOM.render(<DashboardContext>
    <App /></DashboardContext>,
  document.getElementById('root')
);

