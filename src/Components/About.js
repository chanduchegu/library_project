import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading mb-0 text-center">MEET THE TEAM</div>

        <div className="d-flex justify-content-around row-hl mt-0">
          <div className="p-4 item-hl">
            <Profile
              Ename={"Ramesh"}
              Designation={"Manager"}
              Phone={"7680008733"}
              Email={"Ramesh@gmail.com"}
            />
          </div>

          <div className="p-4 item-hl">
            <Profile
              Ename={"Suresh"}
              Designation={"Professor"}
              Phone={"9248652445"}
              Email={"Suresh@gmail.com"}
            />
          </div>

          <div className="p-4 item-hl">
            <Profile
              Ename={"Ganesh"}
              Designation={"Lecturer"}
              Phone={"9014004556"}
              Email={"Ganesh@gmail.com"}
            />
          </div>
        </div>
        <h1 className="text-secondary text-center mb-4">Statistics</h1>
        <table className="table mb-4">
          <thead className="thead-dark">
            <tr>
              <th>S.No</th>
              <th>Department</th>
              <th>No.of Copies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CSE</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ECE</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>IT</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>EEE</td>
              <td>400</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Chemical</td>
              <td>500</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mechanical</td>
              <td>600</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Civil</td>
              <td>700</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;
