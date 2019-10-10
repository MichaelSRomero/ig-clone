import React, { Component } from 'react';
import OauthLogin from './OauthLogin.jsx'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { account, password } = this.state
    if (account.length && password.length) {
      fetch('http://localhost:3000/accounts/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: account, password})
      })
        .then(res => res.json())
        .then(data => console.log(data))
      .catch(err => console.error('Error during fetch request', err))
    }
  }

  handleChange(e) {
    const { value } = e.target;
    // name will be based on the name attr set in input
    this.setState({[e.target.name]: value})
  }

  render() {
    const { account, password } = this.state
    return (
      <form className="content__form" onSubmit={this.handleSubmit}>
        <input 
          className="form__input form__input--border" 
          type="text" 
          name="account" 
          value={account}
          placeholder="Phone number, username, or email"
          onChange={this.handleChange}/>
        <input 
          className="form__input form__input--border" 
          type="password" 
          name="password" 
          value={password} 
          placeholder="Password"
          onChange={this.handleChange}/>
        <input 
          className="form__login form__login--opacity" 
          type="submit" 
          name="submit" 
          value="Log In"/>
        <div className="form__divider">
          <div className="form__hr"></div>
          <span className="form__text">OR</span>
          <div className="form__hr"></div>
        </div>
        <OauthLogin />
      </form>
    )
  }
}

export default Login;