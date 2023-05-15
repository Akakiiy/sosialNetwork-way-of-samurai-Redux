import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {
    SendOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Menu} from 'antd';
import Sider from "antd/es/layout/Sider";

//settings for antd
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
//settings for antd
const items: MenuItem[] = [
    getItem(
        <NavLink to={'/profile'}>Profile</NavLink>,
        '1',
        <UserOutlined />),
    getItem('Users', 'sub1', <TeamOutlined />, [
        getItem(
            <NavLink to={'/users'}>Users</NavLink>,
            '3',
            <TeamOutlined />),
        getItem(
            <NavLink to={'/dialogs'}>Messages</NavLink>,
            '4',
            <SendOutlined />),
    ]),
    getItem(
        <NavLink to={'/settings'}>Settings</NavLink>,
        '5',
        <SettingOutlined />),
];

const Navbar = () => {
    //settings for antd
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible
               collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}>
            <Menu theme="dark"
                  defaultSelectedKeys={['1']}
                  mode="inline" items={items} />
        </Sider>
    )
}

export default Navbar;