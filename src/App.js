import React from 'react';
import MainRoutes from './MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import ToDoContextProvider from './context/ToDoContext';




 const App = () => {
   
  return (
    <div>
      <ToDoContextProvider>
      <Header />
      <MainRoutes />
      </ToDoContextProvider>
    </div>
  );
};

export default App;
