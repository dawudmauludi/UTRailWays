import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider } from 'react-router'
import router from './router/Router'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
