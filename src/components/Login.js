import React from 'react';

import { Layout } from '../layout';

const Login = () => 
<Layout> 
    <form action="">
        <h3>Login</h3>
        <fieldset>
            <label htmlfor="username">Username</label>
            <input type="text" required placeholder="Username"></input>
        </fieldset>
        <fieldset>
            <label htmlfor="userpass">Password</label>
            <input type="password" required placeholder="Password"></input>
        </fieldset>
        <fieldset>
            <input id="login_submit" type="submit" value="submit"></input>
        </fieldset>
    </form>
</Layout>

export default Login;