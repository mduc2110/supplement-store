import {Switch, Route} from 'react-router-dom';


import {getProducts} from '../src/actions/products';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import MainScreen from './Screen/MainScreen';
import Admin from './Screen/Admin';
function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  return (
    <div className="App">
      
      
      <Switch>
        {/* <Route exact path="/" component={MainScreen}/> */}
        <Route exact path="/admin" component={Admin}/>

        <Route path="/admin" component={Admin}/>
        <Route path="/" component={MainScreen}/>
        

      </Switch>
    </div>
  );
}
export default App;
