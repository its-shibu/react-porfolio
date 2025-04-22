import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layouts from './layouts/Layouts'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layouts/>
  </StrictMode>,
)
