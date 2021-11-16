import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from './components/Form'
import FormSuccess from './components/FormSuccess'
import Error from './components/Error'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Form />
          </Route>
          <Route exact path='/success'>
            <FormSuccess />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
