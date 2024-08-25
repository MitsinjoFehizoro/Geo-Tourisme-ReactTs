import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { LinkContextProvider } from './hooks/useLink.tsx'
import { HeightNavContextProvider } from './hooks/useHeightNav.tsx'
import { OrganisationChoiceContextProvider } from './hooks/useChoiceOrganisation.tsx'
import { ToastContextProvider } from './hooks/useToast.tsx'
import { AuthContextProvider } from './hooks/useAuth.tsx'
import { ReservationContextProvider } from './hooks/useChoiceReservation.tsx'
import { DestinationChoiceContextProvider } from './hooks/useChoiceDestination.tsx'
import { DateSearchContextProvider } from './hooks/useDateSearch.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LinkContextProvider>
        <HeightNavContextProvider>
          <DestinationChoiceContextProvider>
            <OrganisationChoiceContextProvider>
              <ReservationContextProvider>
                <ToastContextProvider>
                  <DateSearchContextProvider>
                    <App />
                  </DateSearchContextProvider>
                </ToastContextProvider>
              </ReservationContextProvider>
            </OrganisationChoiceContextProvider>
          </DestinationChoiceContextProvider>
        </HeightNavContextProvider>
      </LinkContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
