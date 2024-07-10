import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import SubmitPhoto from './views/SubmitPhoto';
import ViewGallery from './views/ViewGallery';
import LeaderboardPage from './views/LeaderboardPage';
import NotFound from './views/NotFound';
import Login from './components/Login';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/submit" component={SubmitPhoto} />
            <Route path="/gallery" component={ViewGallery} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
