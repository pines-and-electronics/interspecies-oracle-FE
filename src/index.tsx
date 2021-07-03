import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { lazy, ReactElement, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import client from './apollo'
import { SnackbarContainer, ThemeContainer } from './appContext'
import './index.css'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const NotFound = lazy(() => import('./pages/404'))
const Login = lazy(() => import('./pages/login'))
const Capture = lazy(() => import('./pages/capture'))
const SelectGame = lazy(() => import('./pages/selectGame'))
const SpaceX = lazy(() => import('./pages/spaceX'))
const MetaData = lazy(() => import('./pages/write-metadata'))
const InfoScreen = lazy(() => import('./pages/info-screen'))
const Adjucation = lazy(() => import('./pages/adjucation'))
const ChooseGame = lazy(() => import('./pages/adjucation/chooseGame'))
const Submissions = lazy(() => import('./pages/adjucation/submissions'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const Application = () => {
  return (
    <Suspense fallback={<div className="spin"></div>}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ThemeContainer>
          <SnackbarContainer>
            <Router>
              <RouterPage path="/" pageComponent={<Login />} />
              <RouterPage path="/capture" pageComponent={<Capture />} />
              <RouterPage path="/spacex" pageComponent={<SpaceX />} />
              <RouterPage path="/write-metadata" pageComponent={<MetaData />} />
              <RouterPage path="/select-game" pageComponent={<SelectGame />} />
              <RouterPage path="/info-screen" pageComponent={<InfoScreen />} />
              <RouterPage path="/adjucation/submissions" pageComponent={<Submissions />} />
              <RouterPage path="/adjucation/chooseGame" pageComponent={<ChooseGame />} />
              <RouterPage path="/adjucation" pageComponent={<Adjucation />} />
              <RouterPage default pageComponent={<NotFound />} />
            </Router>
          </SnackbarContainer>
        </ThemeContainer>
      </ApolloProvider>
    </Suspense>
  )
}

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,

  document.getElementById('root')
)
serviceWorkerRegistration.register()
reportWebVitals(console.log)
