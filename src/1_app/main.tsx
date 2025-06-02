import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.scss'
import './styles/global.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '../6_shared/model/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
