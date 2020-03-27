import React from 'react';
import ReactDOM from 'react-dom';
import page1 from './Page1/page1';
import page2 from './Page2/page2'
import * as serviceWorker from './serviceWorker';
import { Route, Link, HashRouter as Router, Switch, Redirect, HashRouter } from "react-router-dom";

//Add pages to component

const Page1 = ({ component: Component }) => (
    <Route render={props =>
        <Component {...props} />}
    />
)
const Page2 = ({ component: Component }) => (
    <Route render={props =>
        <Component {...props} />}
    />
)

//Add routes to pages

const routing = (
    <HashRouter>
        <div>
            <Switch>
                <Page1 exact path='/' component={page1} />
                <Page2 path='/page2' component={page2} />
            </Switch>
        </div>
    </HashRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

//register for offline & unregister for online
serviceWorker.register();
