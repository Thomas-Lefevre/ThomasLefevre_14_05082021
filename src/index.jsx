import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux/es/exports';
import { store } from './utils/store';
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employeeList' element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
