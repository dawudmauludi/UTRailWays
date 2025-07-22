import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider } from 'react-router'
import router from './router/Router'

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
