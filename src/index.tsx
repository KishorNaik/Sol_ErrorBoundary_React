import React from 'react';
import ReactDOM from 'react-dom';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
//import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './Components/Error/ErrorBoundary';
import BuggyCounter from './Components/Demo/BuggyCounter';


ReactDOM.render(
  <React.StrictMode>
     
      <ErrorBoundary>
          <BuggyCounter></BuggyCounter>
      </ErrorBoundary>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
