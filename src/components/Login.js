import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: "",
      txtPassword: ""
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
  }

  render() {
    var { txtUserName, txtPassword } = this.state;
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form>
            <legend>Đăng nhập</legend>

            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                className="form-control"
                name="txtUserName"
                value={txtUserName}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="form-control"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary" onSubmit={this.onLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
