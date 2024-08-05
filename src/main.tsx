import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { LinkContextProvider } from './hooks/useLink.tsx'
import { HeightNavContextProvider } from './hooks/useHeightNav.tsx'
import { OrganisationChoiceContextProvider } from './hooks/useChoiceOrganisation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LinkContextProvider>
      <HeightNavContextProvider>
        <OrganisationChoiceContextProvider>
          <App />
        </OrganisationChoiceContextProvider>
      </HeightNavContextProvider>
    </LinkContextProvider>
  </React.StrictMode>,
)
