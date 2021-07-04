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
const Landing = lazy(() => import('./pages/landing'))
const Capture = lazy(() => import('./pages/capture'))
const SelectGame = lazy(() => import('./pages/selectGame'))
const SelectGameMode = lazy(() => import('./pages/selectGameMode'))
const SpaceX = lazy(() => import('./pages/spaceX'))
const Adjudication = lazy(() => import('./pages/adjudication'))
const ChooseGame = lazy(() => import('./pages/adjudication/chooseGame'))
const CompetitionOverview = lazy(() => import('./pages/adjudication/competitionOverview'))
const Submissions = lazy(() => import('./pages/adjudication/submissions'))
const MetaData = lazy(() => import('./pages/write-metadata'))
const InfoScreen = lazy(() => import('./pages/info-screen'))
const Vote = lazy(() => import('./pages/vote'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const Application = () => {
  return (
    <Suspense fallback={<div className="spin"></div>}>
      <ApolloProvider client={client}>
        <ThemeContainer>
          <SnackbarContainer>
            <CssBaseline />

            <Router>
              <RouterPage path="/" pageComponent={<Landing />} />
              <RouterPage path="/login" pageComponent={<Login />} />
              <RouterPage path="/capture" pageComponent={<Capture />} />
              <RouterPage path="/spacex" pageComponent={<SpaceX />} />
              <RouterPage path="/adjudication/submissions" pageComponent={<Submissions />} />
              <RouterPage path="/adjudication/chooseGame" pageComponent={<ChooseGame />} />
              <RouterPage path="/adjudication/competition-overview" pageComponent={<CompetitionOverview />} />
              <RouterPage path="/adjudication" pageComponent={<Adjudication />} />
              <RouterPage path="/write-metadata" pageComponent={<MetaData />} />
              <RouterPage path="/select-game" pageComponent={<SelectGame />} />
              <RouterPage path="/info-screen" pageComponent={<InfoScreen />} />
              <RouterPage path="/select-game-mode" pageComponent={<SelectGameMode />} />
              <RouterPage path="/vote" pageComponent={<Vote />} />
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
