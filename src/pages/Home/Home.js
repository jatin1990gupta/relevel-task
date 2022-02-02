import React, { Component } from 'react';
import styles from './Home.css';
import Header from '../../components/Header/Header';
import { Switch, Route } from 'react-router';
import Profile from '../../components/Profile/Profile';
import Feeds from '../../components/Feeds/Feeds';
import Comp from '../../components/New/index';

export class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Feeds />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        {/* <Comp firstName={'Jatin'} /> */}
      </div>
    );
  }
}

export default Home;
