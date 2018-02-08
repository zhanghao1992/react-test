import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return <div>
        <NavLink exact className="green" activeClassName="act" to="/">选项1 | </NavLink>
        <NavLink to="/list" activeClassName="act">选项2  |</NavLink>
        <NavLink to="/recommend" activeClassName="act">选项3  |</NavLink>
        <NavLink to="/carousel" activeClassName="act">404  |</NavLink>
        <NavLink to="/redirect" activeClassName="act">redirect  |</NavLink>
    </div>
}
export default NavBar