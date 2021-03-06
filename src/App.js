import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';
import Project from "./components/Projects/Project/Project";
import './App.scss';

const app = (props) => {
    const isAuth = !!localStorage.getItem('user');
    const PrivateRoute = ({component: Component, ...rest}) => {
        return <Route
            {...rest}
            render={(props) => isAuth
                ? (<Component {...props} />)
                : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)}
        />
    };

    return (
        <div className="container">
            {isAuth && <Header history={props.history}/>}
            <Switch>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/projects/:projectId" component={Project} />
                <PrivateRoute path="/projects" component={Projects}/>
                <Redirect to='/login'/>
            </Switch>
        </div>
    );
};

export default withRouter(app);
