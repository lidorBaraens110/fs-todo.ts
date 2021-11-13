import {useState}from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Home from './screens/Home/Home';
import Auth from './screens/Auth/Auth';
import Profile from './screens/Profile/Profile';
import {Provider} from 'react-redux'
import store from './redux';
import Header from './component/Header/Header';

function App() {

  const [isLoading,setIsLoading]=useState<boolean>(true);

  return (
    <Provider store={store}>
    <Router>
      <Header setIsLoading={setIsLoading}/>
      <Switch>
      <Route path='/todo/:category'>
          <Home />
          </Route>
      <Route path='/auth' exact >
          <Auth isLoadingPage={isLoading}/>
          </Route>
     
        
        <Route path='/profile' component={Profile}/> 
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
