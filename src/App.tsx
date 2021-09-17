import React, { Suspense } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// @import component
import Loading from './components/Loading'
// @import layout
import MainLayout from './layout/MainLayout'
// @import page
const Home = React.lazy(() => import('./pages/Home'))
const Discover = React.lazy(() => import('./pages/Discover'))

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100% !important;
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              render={() => (
                <MainLayout>
                  <Home />
                </MainLayout>
              )}
            />
            <Route
              path="/discover"
              render={() => (
                <MainLayout>
                  <Discover />
                </MainLayout>
              )}
            />
          </Switch>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
