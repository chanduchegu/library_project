import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component {
  render() {
    const { Ename, Designation, Phone, Email } = this.props;
    return (
      <div className="card">
        <div className="card-img"></div>
        <img
          src="https://wallpapershome.com/images/wallpapers/tiger-2560x1440-muzzle-grin-amur-portrait-934.jpg"
          alt="error"
          className="profile-img"
        />
        <h1>{Ename}</h1>
        <div className="details">
          <ul>
            <li>{Designation}</li>
            <li>{Email}</li>
            <li>{Phone}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Profile;
