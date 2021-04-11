import React from 'react'
import Header from '../../Components/Header'
import {Switch, Route} from 'react-router-dom';
import ProductsList from '../../Components/ProductsList';
import ProductDetail from '../../Components/ProductDetail';
import CartScreen from '../CartScreen';
import Login from '../Login';
import CheckoutScreen from '../CheckoutScreen';
import ProtectedRouteUser from '../../utils/ProtectedRouteUser';

// import HomeBanner from './Components/HomeBanner';
function MainScreen() {

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={ProductsList}/>
                <Route exact path="/product/:prodId" component={ProductDetail}/>
                <Route exact path="/cart" component={CartScreen}/>
                <Route exact path="/login" component={Login}/>
                {/* <Route exact path="/checkout" component={CheckoutScreen}/> */}
                <ProtectedRouteUser path="/checkout" component={CheckoutScreen}/>
            </Switch>

        </>
    )
}

export default MainScreen
