import React, { Component } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ProjectDataService from "../Services/ProjectDataService";

class ListProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projectId: this.props.match.params.id,
      projectName: "",
      projectMembers: ""
    };

    this.routeAddProject = this.routeAddProject.bind(this);
    this.refreshProject = this.refreshProject.bind(this);
    this.handleShowModel = this.handleShowModel.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);
    this.deleteProjectClicked = this.deleteProjectClicked.bind(this);
  }

  //Route ADD Project
  routeAddProject() {
    let path = `/add`;
    this.props.history.push(path);
  }

  routeEditBook() {
    this.handleShowModel();
  }

  componentDidMount() {
    // CALLING REFRESH PROJECT METHOD
    this.refreshProject();
  }
  //ADD or EDIT MODEL CLOSE
  handleCloseModel() {
    this.setState({ show: false });
  }
  //ADD or EDIT MODEL SHOW
  handleShowModel() {
    this.setState({ show: true });
  }

  //REFRESH PROJECT METHOD
  refreshProject() {
    ProjectDataService.retrieveAllProjects().then(response => {
      console.warn("Refresh Service is working");
      this.setState({ projects: response.data });
    });
  }

  //DELETE-METHOD 1 = WORKING
  deleteProjectClicked(id) {
    ProjectDataService.deleteProject(id).then(response => {
      console.warn("Delete Service is working");
      this.refreshProject();
      alert(" Book deleted successfully");
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
          <Button varient="primary" onClick={this.routeAddProject}>
            {" "}
            <i className="fa fa-plus">Hello</i>
          </Button>
          &nbsp;
          <Button variant="success" onClick={this.handleShowModel}>
            <i className="fa fa-plus">Add</i>
          </Button>
          <br /> <br />
          <span id="alert" />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
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
                        ) && this.deleteProjectClicked(project.projectId)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* ReactBootstrap Model */}

        <Modal
          show={this.state.show}
          onHide={this.handleCloseModel}
          size="lg"
          // style={{
          //   background: "linear-gradient(to right bottom, #5C258D, #4389A2)"
          // }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Spinner animation="border" variant="success" />
              {/* <Spinner animation="grow" variant="success" /> */}
              &nbsp; &nbsp; Add Project Here #
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Project ID</Form.Label>
                <Form.Control placeholder="#P15856" disabled />
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Project Name</Form.Label>
                <Form.Control placeholder="Please enter the project name" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Project Members</Form.Label>
                <Form.Control placeholder="Please Enter Project Members" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Project Port</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Test Data</option>
                    <option>Test Data</option>
                    <option>Test Data</option>
                    <option>Test Data</option>
                    <option>Test Data</option>
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
