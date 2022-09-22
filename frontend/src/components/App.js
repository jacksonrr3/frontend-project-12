import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import routes from '../routes';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Router>
      <Route />
      {/* <Redirect to="/login" />
      <Navbar shadow="sm" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href={routes.rootPage()}>React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <div>test</div>
      <Switch>
        <Route path={routes.rootPage()}>404</Route>
        <Route path={routes.loginPage()}>LoginPage</Route>
      </Switch> */}
    </Router>
  </div>
);

export default App;
