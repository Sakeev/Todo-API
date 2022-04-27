import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddToDo from './components/AddToDo/AddToDo';
import EditToDo from './components/EditToDo/EditToDo';
import HomePage from './components/HomePage/HomePage';
import ToDoList from './components/ToDoList/ToDoList';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/add' element={<AddToDo />}/>
            <Route path='/list' element={<ToDoList />}/>
            <Route path='/edit' element={<EditToDo />}/>
        </Routes>
    );
};

export default MainRoutes;