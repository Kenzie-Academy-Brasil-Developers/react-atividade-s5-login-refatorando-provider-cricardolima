import { Route, Switch } from 'react-router'
import { Dashboard } from '../components/dashboard'
import { Login } from '../components/login'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}
