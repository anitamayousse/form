
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isSubmitted: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
      isSubmitted: true,
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
      isSubmitted: true,
    });
  }

  handleSubmit(e) {

    e.preventDefault();
  }

  render() {
    return (
      <div className= "container">
      <form className="was-validated" onSubmit={this.handleSubmit}>

        <div class="mb-3">
          <label className="form-label" for="validationEmail">
            Email:
          </label>
          <input
            class="form-control is-invalid w-50"
            id="validationEmail"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleEmail}
            required
          >
          </input>
        </div>

        <div class="mb-3">
          <label className="form-label" for="validationPassword">
            Password:
          </label>
          <input
            class="form-control is-invalid w-50"
            type="password"
            id="validationPassword"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handlePassword}
            required
          >
          </input>
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            className="p-2 m-2"
            value="remember-me"
            id="remember_me"
          />
          Remember me
        </div>

        <div className="mb-3">
          <input
            type="submit"
            className="p-2 m-2"
            value="Submit"
            onChange={this.handleSubmit}
          />
        </div>
      </form>
      </div>
    );
  }
}
export default App;