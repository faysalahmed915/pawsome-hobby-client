import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import UserProvider from './Provider/UserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} fallbackElement={<p>Loading, Please Wait....</p>} />
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
)
