import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
    render(){
        return (
            <div>
                eweewew
                {/* 1234 */}
                {/* <HashRouter> */}
                    <Link to="/test1" >test1</Link>
                    <Link to="/test2" >test2</Link>
                    <Link to="/test3" >test3</Link>
                {/* </HashRouter> */}
                
            </div>
        )
    }
}