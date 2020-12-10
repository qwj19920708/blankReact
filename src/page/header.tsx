import React from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import '../style/main.scss'
const { SubMenu } = Menu


interface menuStructor {
    title:string,
    url: string,
    children?:Array<menuStructor>
}

const menuList:Array<menuStructor> = [
    {
        title: "医疗图谱",
        url: "/medicalAtlas",
    },
    {
        title: "编码转化",
        url: "/codeConversion",
    },
]

export class Header extends React.Component {

    state = {
        current: "mail"
    }

    handleClick = (e:any) => {
        console.log(e)
        this.setState({current: e.key})
    }

    render(){
        const { current } = this.state
        return (
            <div className="headerWrap">
                <div>
                    <img></img>
                    <p></p>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" icon={<AppstoreOutlined />}>
                        Navigation Two
                    </Menu.Item>
                    {/* <SubMenu
                        key="SubMenu"
                        icon={<SettingOutlined />}
                        title="Navigation Three - Submenu">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                        </a>
                    </Menu.Item> */}
                </Menu>
            </div>
        )
    }
}

export default Header