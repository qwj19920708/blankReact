import React from 'react'
import { Menu } from 'antd'
import logoImage from '@img/logo.jpg'
import menuInformation from '@json/menu.json'
import menuStructor from '../interface/main'
import '@css/main.scss'
import { Link } from 'react-router'


const { SubMenu } = Menu

interface headerStateProps {
    current: string,
    menuList: Array<menuStructor>
}

export class Header extends React.Component<{}, headerStateProps> {
    
    state:headerStateProps = {
        current: "home",
        menuList: menuInformation.list,
    }

    handleClick = (e:any) => {
        this.setState({current: e.key})
    }

    render(){
        const { current } = this.state
        return (
            <div>
                <div className="headerWrap">
                    <img src={logoImage} className="logo"></img>
                    <h1 className="title">联仁健康大数据</h1>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
                        {
                            this.state.menuList.map( item =>{
                                if (item.children && item.children?.length) {
                                    return (
                                        <SubMenu key= { item.key } title = { item.title }>
                                            { 
                                                item.children.map(subItem => {
                                                    return (
                                                        <Menu.Item key= { subItem.key } title = { subItem.title }></Menu.Item>
                                                    )
                                                })
                                            } 
                                        </SubMenu>
                                    )
                                } else {
                                    return <Menu.Item key= { item.key }> 
                                        {item.title} <Link to={item.url}></Link>
                                    </Menu.Item>
                                }
                            })
                        }
                    </Menu>
                </div>
                { this.props.children }
            </div>
        )
    }
}

export default Header