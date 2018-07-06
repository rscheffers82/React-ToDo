import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from 'actions';

// this export is used for tests
export class Login extends Component {
  onLogin = () => {
    this.props.dispatch(startLogin('google', this.props.history));
  }

  render() {
    return ([
      <h1 className="page-title">To-do List</h1>,
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm12">
            <div className="container callout callout-auth">
              <h3>Login</h3>
              <p>Login with your google account.</p>
              <button className="blue-border" onClick={this.onLogin}>Login with Google</button>
            </div>
        </div>
      </div>
    ]);
  }
};
// using the default to pass to connect
export default connect()(Login);
