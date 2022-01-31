import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
  render() {
    return (
      <form>
        {/* Email */}
        <div className="mb-3 w-50">
          <label htmlFor="validationEmail" className="form-label">
            Email:
          </label>

          <input
            type="email"
            className={`form-control ${this.props.validEmail}`}
            id="validationEmail"
            placeholder="Your email"
            aria-describedby="emailHelp"
            onChange={this.props.handleEmail}
          />

          <div id="emailHelp" className="form-text"></div>
        </div>

        {/* Password */}
        <div className="mb-3 w-50">
          <label htmlFor="validationPassword" className="form-label">
            Password:
          </label>

          <input
            type="password"
            className={`form-control ${this.props.validPassword}`}
            id="validationPassword"
            placeholder="Your password"
            onChange={this.props.handlePassword}
          />
        </div>

        {/* Remember me */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="remember-me"
            id="remember_me"
          />

          <label className="form-check-label" htmlFor="remember_me">
            Remember me
          </label>
        </div>

        {/* Submit */}
        <button
          onClick={this.props.handleSubmit}
          type="submit"
          className="mb-3 btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;