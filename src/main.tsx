import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/components/App/App' 
import '../src/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
