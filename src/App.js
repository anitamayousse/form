
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
      validEmail: "",
      validPassword: "",
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
      this.setState({ 
        email: "" ,
        validEmail: "is-valid" ,
      });
    }
    else{
      this.setState({ 
        email: "" ,
        validEmail: "is-invalid" 
      });
    }
  }

  handlePassword(e) {
    if (
      e.target.value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )) 
    {
      this.setState({ 
        password: "",
        validPassword: "is-valid" });
    }
    else{
      this.setState({ 
        password: "" ,
        validPassword: "is-invalid" 
      });
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
  renderSubmit() {
    if (
      this.state.email === "is-valid" && 
      this.state.password === "is-valid"
    ) {
  
    return(
      <section>
      <h1>You are connected</h1>
      </section>
    );
  }
    else  {
      return (
          <section>
              <p>You are not connected!</p>
          </section>
      );
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
      {this.renderSubmit()}
      </div>
    );
  }
}
export default App;