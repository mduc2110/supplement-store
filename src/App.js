import {Switch, Route} from 'react-router-dom';


import {getProducts} from '../src/actions/products';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import MainScreen from './Screen/MainScreen';
import Admin from './Screen/Admin';
import axios from 'axios';
import ProtectedRouteAdmin from '../src/utils/ProtectedRouteAdmin'
import { getRole } from './utils/Common';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // axios
  
  return (
    <div className="App">
      
      
      <Switch>
        {/* <Route exact path="/" component={MainScreen}/> */}
        <ProtectedRouteAdmin path="/admin" component={Admin}/>
        {/* <Route exact path="/admin" component={Admin}/> */}

        <Route path="/admin" component={Admin}/>
        <Route path="/" component={MainScreen}/>
        <Route path="/" component={MainScreen}/>
        
        
      </Switch>
    </div>
  );
}
export default App;
