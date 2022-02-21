import './main.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/Pages/Home/Home';
import { List } from './components/Pages/List/List';
import { GenericError } from './components/Pages/GenericError/GenericError';
import { AxiosInterceptors } from './components/AxiosInterceptor/AxiosInterceptor';
import { UserContextProvider } from './contexts/userContext';

const App = () => {
  return (
    <AxiosInterceptors>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to={'/home'} />
            </Route>

            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/list'} component={List} />
            <Route exact path={'/error'} component={GenericError} />

            <Route component={GenericError} />
          </Switch>
        </Router>
      </UserContextProvider>
    </AxiosInterceptors>
  )
}

export default App;
