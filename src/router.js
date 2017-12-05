import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './pages/home';
import SignIn from './pages/signin';

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.updateName = this.updateName.bind(this);
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' render={() => (
          this.state.name ?
            <Home user={this.state.name} />
            :
            <SignIn saveName={this.updateName} />
        )} />
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
