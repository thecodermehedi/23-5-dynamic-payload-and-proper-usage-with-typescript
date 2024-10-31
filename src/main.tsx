import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserInfoWithUseReducer />
  </StrictMode>,
)
