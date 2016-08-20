import React from 'react'
import { render } from 'react-dom'
import App from './Modules/App'
import Repos from './Modules/Repos'
import Repo from './Modules/Repo'
import About from './Modules/About'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <Route path='/repos' component={ Repos }>
        <Route path='/repos/:userName/:repoName' component={ Repo }/>
      </Route>
      <Route path='/about' component={ About }/>
    </Route>
  </Router>
), document.getElementById( 'app' ));