import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home/Home'
import City from '../views/City/City'
import User from '../views/User/User'
import NoMatch from '../views/NoMatch/NoMatch'
import Search from '../views/Search/Search'
import Detail from '../views/Detail/Detail'

class RouterMap extends React.Component {
    mixins: [PureRenderMixin]

    constructor(...args) {
        super(...args)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/city" component={City} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/detail" component={Detail} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Router >
        )
    }
}

export default RouterMap
