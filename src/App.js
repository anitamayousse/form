
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css'

class App extends React.Component {
  constructor () {
  super ();

  this.state = {
    email: "",
    password: "",
    isSubmitted: false,
  }

  this.validateForm = this.validateForm.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this)
}

validateForm(){
  return this.email.length > 0 && this.password.length > 0;
}

handleSubmit(event) {
  console.log('Your email is' + this.state.email + "Your password is" + this.state.password + 'are submitted');
  event.preventDefault();
}
  render() {
    return (
      <div className="container-fluid">
      <form onSubmit={this.handleSubmit}>
        <form controlId="email">
          <label>Email</label>
          <input
            autoFocus
            type="email"
            value={this.email}
            onChange={(e) => this.setEmail(e.target.value)}
          />
        </form>
        <form  controlId="password">
          <label>Password</label>
          <form
            type="password"
            value={this.password}
            onChange={(e) => this.setPassword(e.target.value)}
          />
        </form>
        <input type="checkbox" class="p-2 m-2" value="remember-me" id="remember_me"/>  Remember me
        <button type="submit" disabled={!this.validateForm()}>
          Login
        </button>
      </form>
      </div>
    );
  }
}

export default App;