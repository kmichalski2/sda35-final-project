import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import { EmployeesPage } from './pages/EmployeesPage'
import { DetailsPage } from './pages/DetailsPage';
import { AddPage } from './pages/AddPage';
import { EditPage } from './pages/EditPage';
import { LanguageSelector } from './components/LanguageSelector';
import { BackButton } from './components/BackButton';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmployeesPage />
  },
  {
    path: '/details/:id',
    element: <DetailsPage />
  },
  {
    path: '/add',
    element: <AddPage />
  },
  {
    path: '/edit/:id',
    element: <EditPage />
  }
]);



function App() {
  return (
    <>
      <header className='container d-flex align-items-center py-2'>
        <BackButton />
        <LanguageSelector />
      </header>
      <main className='container'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
