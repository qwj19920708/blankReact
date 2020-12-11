import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import Header from './page/header'
import Home from './page/view/home'
import CodeConversion from '@view/codeConversion/codeConversion.tsx'
import MedicalAtlas from '@view/medicalAtlas/medicalAtlas.tsx'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)
const location = history.getCurrentLocation()
// console.log(location.pathname)

export default class App extends Component{
    render(){
        return (
            <div>    
                <Provider store={store}>
                    <Router history={history}>  
                        <Route path="/" component={Header}>
                            <IndexRoute component={Home}/>
                            <Route path="/medicalAtlas" component={MedicalAtlas}></Route>
                            <Route path="/codeConversion" component={CodeConversion}></Route> 
                        </Route>
                    </Router>
                </Provider>
            </div>
        )
    }
}