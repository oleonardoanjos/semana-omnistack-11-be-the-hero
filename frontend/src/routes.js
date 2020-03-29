import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EditProfile from './pages/EditProfile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" exact component={Profile} />
                <Route path="/profile/edit" component={EditProfile} />

                <Route path="/incidents/new" component={NewIncident} />
                
            </Switch>
        </BrowserRouter>
    );    
}