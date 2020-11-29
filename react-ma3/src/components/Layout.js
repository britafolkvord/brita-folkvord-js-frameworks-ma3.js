import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Login from './Login';

function Layout() {
    return (
        <Router>
            <div>
                        <NavLink to="./" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="./News" className="nav-link">
                            News
                        </NavLink>
                        <NavLink to="./Login" className="nav-link">
                            Login
                        </NavLink>

            </div>
                <Switch>
                    <Route path="./" exact component={Home} />
                    <Route path="./News" component={News} />
                    <Route path="./Login" component={Login} />
                </Switch>
        </Router>
    );
}

export default Layout;