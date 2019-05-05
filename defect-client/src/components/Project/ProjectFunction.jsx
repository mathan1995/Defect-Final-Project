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

class FunctionProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projectId: this.props.match.params.id,
      projectName: "",
      projectMembers: ""
    };

    this.refreshProject = this.refreshProject.bind(this);
    this.handleShowModel = this.handleShowModel.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);
    this.deleteProjectClicked = this.deleteProjectClicked.bind(this);
    this.addProjectClicked = this.addProjectClicked.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  routeEditBook() {
    this.handleShowModel();
  }

  componentDidMount() {
    if (this.state.projectId == "#P15856") {
      return;
    }
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
  routeaddproject() {
    this.handleShowModel();
  }
  //ADD PROJECT CLICKED OPEN MODEL
  addProjectClicked() {
    this.handleShowModel();
    // this.props.history.push(`/add/1`);
  }

  updateProjectClicked(id) {
    this.handleShowModel(`/${id}`);
  }

  onSubmit(values) {
    let projects = {
      projectId: this.state.projectId,
      projectName: values.projectId,
      projectMembers: values.projectMembers
    };

    if (this.state.projectId === "#P15856") {
      ProjectDataService.createProject(projects).then(() =>
        this.props.history.push("/")
      );
    } else {
      ProjectDataService.updateProject(this.state.projectId, projects).then(
        () => this.props.history.push("/")
      );
    }

    console.log(values);
  }

  render() {
    let { projectId, projectName, projectMembers } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br />
            <br />
            {/* ReactBootstrap Model */}
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Project id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="#P15856"
                  id="projectId"
                  name="projectId"
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the project name"
                  id="projectName"
                  name="projectName"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Project Members</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  placeholder="Please enter the project name"
                >
                  <option>mathan</option>
                  <option>mathan</option>
                  <option>mathan</option>
                  <option>mathan</option>
                </Form.Control>
              </Form.Group>
              <Button variant="danger">Close</Button>&nbsp;
              <Button variant="primary">Save</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionProject;
