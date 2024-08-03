import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { EmployeesPage } from './pages/EmployeesPage'
import { DetailsPage } from './pages/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmployeesPage />
  },
  {
    path: '/details',
    element: <DetailsPage />
  }
]);

function App() {
  return (
    <>
      <main className='container'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
