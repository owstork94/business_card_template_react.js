import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ Fileinput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker Fileinput={Fileinput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )

}

export default App;
