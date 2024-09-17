import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/store.ts'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
