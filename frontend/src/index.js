import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { Spinner } from "reactstrap"
import "./style.css"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { persistor } from "./Redux/Store"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Suspense fallback={<Spinner className='spinner bg-warning' type='grow'/>}>
     <Provider store={store}>
     <PersistGate persistor={persistor}>
     <App />
     </PersistGate>
     </Provider>
   </Suspense>
  </React.StrictMode>
);

