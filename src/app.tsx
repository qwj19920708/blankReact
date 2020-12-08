import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Test0 from './view/test0'
import Test1 from './store/container/test1'
import Test2 from './view/test2'
import Test3 from './view/test3'

import Header from './page/header'

import { syncHistoryWithStore } from 'react-router-redux';

import { Route, Router, IndexRoute, hashHistory, Link } from 'react-router'



const store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)

export default class App extends Component{
    render(){
        return (
            <div> 
                {/* <Provider store={store}>
                    <Test1 name="test1"  />
                </Provider> */}
                <Header></Header>
                <Router history={history}>
                    {/* <Header /> */}
                    {/* <Link to="/test1" >test1</Link> */}
                    <Route path="/" component={Test0}></Route>
                    <Route path="/test2" component={Test2}></Route>
                    <Route path="/test3" component={Test3}></Route>
                </Router>
            </div>
        )
    }
}