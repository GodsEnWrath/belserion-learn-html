import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Home,
    About,
    Contact,
    NestedUser,
    Users,
    Header,
    SignIn,
    SignUp
} from "./components";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/users" exact={true}>
                    <Users />
                </Route>
                <Route path="/users/:name">
                    <NestedUser />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
