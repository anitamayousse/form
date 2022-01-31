
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css'

import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      validEmail: "is-invalid",
      validPassword: "is-invalid",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    if (
      e.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ))
    {
      this.setState({ email: e.target.value });
      this.setState({ validEmail: "is-valid" });
    }
  }

  handlePassword(e) {
    if (
      e.target.value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )) 
    {
      this.setState({ password: e.target.value });
      this.setState({ validPassword: "is-valid" });
    }
  }

  handleSubmit(e) {
    if (this.state.email !== "" || this.state.password !== "") {
      alert(`Your email is +${this.state.email}`);
      e.preventDefault();
    } else {
      alert("Verify your email or password");
    }
  }

  render() {
    return (
      <div>
        <Form
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          validEmail={this.state.validEmail}
          validPassword={this.state.validPassword}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default App;