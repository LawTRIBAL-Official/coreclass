import React from 'react';
import { NavLink } from 'react-router-dom';


/*
const navs = [ {
    
    path: '/',
    name: 'Home'
},
{
    path: '/about',
    name: 'About'
},
{
    path: '/contact',
    name: 'contact'
},
{
    path: '/users',
    name: 'users'
},
{
    //path: '/login',
    //name: login
}];

*/


const Nav = () => (
    <header>
        <div className="header-container">
            <div>
                <h1>MVC - Core</h1>
                <p class="p-lg"> Core Application Class</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeclassname="active">Home</NavLink></li>
                        <li>
                            <NavLink exact to ="/about" activeclassname="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeclassname="active">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/users" activeclassname="active">Users</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/login" activeclassname="active">Login</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/signup" activeclassname="active">Signup</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/api" activeclassname="active">API</NavLink>
                        </li>
                        { /*<button onClick={() => app.auth().signOut()}>Sign out</button> */ }
                    </ul>
                </nav>
            </div>
            <div>
                
            </div>
            
        </div>
    </header>
);

export default Nav;