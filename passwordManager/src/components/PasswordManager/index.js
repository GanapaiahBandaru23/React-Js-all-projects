import React, {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PasswordsList from '../PasswordsList'
import './index.css'

class PasswordManager extends Component {
  state = {
    link: '',
    username: '',
    pass: '',
    showpass: false,
    passwordsList: [],
    searchQuery: '',
  }

  onChangeUrl = event => {
    this.setState({link: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({pass: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchQuery: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {link, username, pass} = this.state
    const newPassword = {
      id: uuid(),
      link,
      username,
      pass,
    }
    this.setState(prevState => ({
      link: '',
      username: '',
      pass: '',
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  listElementDelete = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  changeShow = event => {
    this.setState({showpass: event.target.checked})
  }

  getFilteredPasswords = () => {
    const {passwordsList, searchQuery} = this.state
    return passwordsList.filter(
      password =>
        password.link.toLowerCase().includes(searchQuery) ||
        password.username.toLowerCase().includes(searchQuery),
    )
  }

  render() {
    const {link, username, pass, showpass, searchQuery} = this.state
    const filteredPasswords = this.getFilteredPasswords()

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card1">
          <div className="card11">
            <div className="formContainer">
              <form id="form" onSubmit={this.formSubmit}>
                <h1 className="heading2">Add New Password</h1>
                <div className="inputContainer">
                  <label htmlFor="website">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      className="InputIcons"
                      alt="website"
                    />
                  </label>
                  <input
                    onChange={this.onChangeUrl}
                    value={link}
                    type="text"
                    placeholder="Enter Website"
                    id="website"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="username">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="InputIcons"
                      alt="username"
                    />
                  </label>
                  <input
                    value={username}
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="password">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="InputIcons"
                      alt="password"
                    />
                  </label>
                  <input
                    value={pass}
                    onChange={this.onChangePass}
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    required
                  />
                </div>
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="PasswordManagerLogo"
            alt="password manager"
          />
        </div>

        <div className="card2">
          <div className="top">
            <h1 className="heading2">Your Passwords</h1>
            <p>{filteredPasswords.length}</p>
            <div className="inputContainer cc2">
              <label htmlFor="search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="InputIcons"
                  alt="search"
                />
              </label>
              <input
                type="search"
                placeholder="Search"
                id="search"
                value={searchQuery}
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="showpass">
            <input
              type="checkbox"
              id="box"
              onChange={this.changeShow}
              checked={showpass}
            />
            <label htmlFor="box" className="ll">
              Show passwords
            </label>
          </div>
          <div className="">
            {filteredPasswords.length === 0 ? (
              <div className="imageContainer">
                <img
                  className="noPassImage"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <PasswordsList
                showpass={showpass}
                passwordsList={filteredPasswords}
                listElementDelete={this.listElementDelete}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
