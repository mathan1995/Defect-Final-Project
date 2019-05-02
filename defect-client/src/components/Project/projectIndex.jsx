import React, { Component } from "react";

class ProjectIndex extends Component {
  render() {
    return (
      <div>
        <h2>Main Index File is here</h2>

        <div className="col-sm-12">
          <br />

          <div className="container">
            <button className="btn btn-success" type="submit">
              <i className="fa fa-plus"> Add</i>
            </button>

            <br />

            <table className="table">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Project Name</th>
                  <th>Project-Members</th>
                  <th> &nbsp; &nbsp; &nbsp; &nbsp;Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>IOT</td>
                  <td>Mathan Hari</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-edit">Edit</i>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>IOT</td>
                  <td>Mathan Hari</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-edit">Edit</i>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectIndex;
