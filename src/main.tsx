import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store.ts';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-right"
      />
    </BrowserRouter>
  </Provider>
);
