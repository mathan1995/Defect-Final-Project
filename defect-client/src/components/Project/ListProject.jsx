import React, { Component } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class ListProject extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.routeAddProject = this.routeAddProject.bind(this);
    this.refreshProject = this.refreshProject.bind(this);
    this.handleShowModel = this.handleShowModel.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);
  }

  //Route ADD Project
  routeAddProject() {
    let path = `/Help`;
    this.props.history.push(path);
  }

  routeEditBook() {
    this.handleShowModel();
  }

  componentDidMount() {
    axios.get("http://localhost:8080/Defect/findAllProject").then(response => {
      this.setState({ projects: response.data });
      //console.table(response.data);
      console.warn("Project Service is working");
    });

    // CALLING REFRESH PROJECT METHOD
    this.refreshProject();
  }

  handleCloseModel() {
    this.setState({ show: false });
  }

  handleShowModel() {
    this.setState({ show: true });
  }

  //REFRESH PROJECT METHOD
  refreshProject() {
    axios.get("http://localhost:8080/Defect/findAllProject").then(response => {
      console.warn("Refresh Service is working");
      this.setState({ projects: response.data });
    });
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="container" onLoad={this.refreshProject}>
          {/* Calling help Component */}
          {/* <button
            className="btn btn-success"
            type="submit"
            onClick={this.routeAddProject}
          >
            <i className="fa fa-plus">Help</i>
          </button> */}
          <br />
          <Button variant="primary" onClick={this.handleShowModel}>
            <i className="fa fa-plus">Add</i>
          </Button>
          <br /> <br />
          <table className="table">
            <thead>
              <tr>
                <th>PROJECT-ID</th>
                <th>PROJECT-NAME</th>
                <th>PROJECT-MEMBERS</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => (
                <tr key={project.projectId}>
                  <td>{project.projectId}</td>
                  <td>{project.projectName}</td>
                  <td>{project.projectMembers}</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditBook(project.projectId)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      //NORMAL CALL
                      // onClick={() => this.deleteBook(book.bookId)}

                      //CALL WITH CONFIRM MESSAGE
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Book? "
                        ) && this.deleteBook(project.projectId)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ReactBootstrap Model */}

        <Modal
          show={this.state.show}
          onHide={this.handleCloseModel}
          size="lg"
          style={{
            background: "linear-gradient(to right bottom, #5C258D, #4389A2)"
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleCloseModel}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseModel}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ListProject;
