import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return <div>
        <NavLink exact className="green" activeClassName="act" to="/">选项1 | </NavLink>
        <NavLink to="/NavItem2/2342/zh" activeClassName="act">选项2  |</NavLink>
        <NavLink to="/NavItem3" activeClassName="act">选项3  |</NavLink>
        <NavLink to="/NavItem3sd" activeClassName="act">404  |</NavLink>
        <NavLink to="/redirect" activeClassName="act">redirect  |</NavLink>
    </div>
}
export default NavBar