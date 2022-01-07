import React from 'react'
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import { Menu } from 'antd';
import { LoginOutlined,UserAddOutlined} from '@ant-design/icons';
// import Login from "../Login";

// import Bowtest from "../../components/Bowtest";

// light | dark

const Navbar = () => {
    return (     
      <Menu mode="horizontal"   theme="dark">

      <Menu.Item key="alipay">
          <Link to="/">Home test</Link>
      </Menu.Item>
      <Menu.Item key="app2"  icon={<UserAddOutlined/>}>
          <Link to="/map">map</Link> 
      </Menu.Item>
      <Menu.Item key="app3"  icon={<UserAddOutlined/>}>
          <Link to="/dashboard">Dashboard</Link> 
      </Menu.Item>
      <Menu.Item key="mail" style={{ marginLeft: 'auto' }}  icon={<LoginOutlined/>}>
          <Link to="/login">login</Link>
      </Menu.Item>

      <Menu.Item key="app"  icon={<UserAddOutlined/>}>
          <Link to="/register">register</Link> 
      </Menu.Item>
   
    
    </Menu>
        
    )
}
export default Navbar