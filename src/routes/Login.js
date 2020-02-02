import React from "react";
import GoogleLogin from "react-google-login";

class Login extends React.Component {
  state = {
    id: "",
    name: "",
    provider: ""
  };

  responseGoogle = response => {
    this.setState({
      id: response.googleId,
      name: response.profileObj.name,
      provider: "google"
    });
  };

  responseFail = error => {
    console.log(error);
  };

  render() {
    return (
      <div className="container">
        <p>This is login page</p>
        <GoogleLogin
          clientId="514288721931-1k2st0f6hu1hbdoflgkq5oagce61u0u1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
          // cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
export default Login;
