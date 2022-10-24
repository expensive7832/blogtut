import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { Spinner } from "reactstrap"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Suspense fallback={<Spinner className='spinner bg-warning' type='grow'/>}>
      <App />
   </Suspense>
  </React.StrictMode>
);

