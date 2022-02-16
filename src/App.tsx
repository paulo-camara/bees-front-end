import './main.scss';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Home } from './components/Pages/Home/Home';
import { List } from './components/Pages/List/List';
import { GenericError } from './components/Pages/GenericError/GenericError';
import { AxiosInterceptors } from './components/AxiosInterceptor/AxiosInterceptor';
import { UserContextProvider } from './contexts/userContext';

const App = () => {
  return (
    <AxiosInterceptors>
      <UserContextProvider>
        <Router>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"></link>
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
