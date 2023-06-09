import { func } from "prop-types";
import React, { Component } from "react";

class MainComponent extends Component {
  render() {
    const users = [
      { id: 1, name: "Mike Frost", role: "Front End Developer" },
      { id: 2, name: "Kennedy Kamau", role: "Back End Developer" },
      { id: 3, name: "Raphael Abanga", role: "Full Stack Developer" },
    ];
    return (
      <div className="container">
        <h1 className="h1">Hello World</h1>
        <p>Learning to code with React</p>
        <ol>
          {users.map(function (user, index) {
            return (
              <li key={index}>
                {user.name} as the {user.role}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default MainComponent;
