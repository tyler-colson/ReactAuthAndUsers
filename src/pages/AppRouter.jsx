// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsers from './ListUsers';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import LogIn from './LogIn';
import NavBar from './NavBar'
import AuthDetails from './AuthDetails';
import Footer from '../components/footer';

const AppRouter = () => {
  return (
    <Router>
        <div>
        <NavBar />
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/ListUsers" component={ListUsers} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/AuthDetails" component={AuthDetails} />

        {/* Add more Switch as needed */}
      </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;