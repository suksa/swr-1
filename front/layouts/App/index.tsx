import React from 'react'
import loadable from '@loadable/component'
import { Redirect, Route, Switch } from 'react-router-dom'

const Workspace = loadable(() => import('@layouts/Workspace'))
const LogIn = loadable(() => import('@pages/LogIn'))
const SignUp = loadable(() => import('@pages/SignUp'))

const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/workspace/:workspace" component={Workspace} />
        </Switch>
    )
}

export default App
