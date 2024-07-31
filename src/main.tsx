import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { LinkContextProvider } from './hooks/useLink.tsx'
import { HeightNavContextProvider } from './hooks/useHeightNav.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LinkContextProvider>
      <HeightNavContextProvider>
        <App />
      </HeightNavContextProvider>
    </LinkContextProvider>
  </React.StrictMode>,
)
