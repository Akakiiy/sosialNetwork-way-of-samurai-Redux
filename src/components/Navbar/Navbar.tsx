import React, {useState} from "react";
import {
    SendOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import Sider from "antd/es/layout/Sider";
import {useLocation, useNavigate} from 'react-router-dom'


const Navbar = () => {
    //settings for antd
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    let location = useLocation();

    return (
        <Sider collapsible
               collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="dark"
                  mode="inline"
                  onClick={({key}) => {
                      navigate(key)
                  }}
                  defaultSelectedKeys={[location.pathname]}
                  // defaultChecked={'/profile'}
                  // defaultMotions={'/profile'}
                  items={[
                      { label: 'Profile', key: '/profile', icon: <UserOutlined />},
                      { label: 'Users', key: '/users', icon: <TeamOutlined />},
                      { label: 'Messages', key: '/dialogs', icon: <SendOutlined />},
                      { label: 'Chat', key: '/chat', icon: <SendOutlined />},
                      { label: 'Settings', key: '/settings', icon: <SettingOutlined />},
                  ]}
            />
        </Sider>
    )
}

export default Navbar;