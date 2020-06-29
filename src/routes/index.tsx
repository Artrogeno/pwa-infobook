import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Book from '../pages/Book'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/book/:isbn">
          <Book />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
