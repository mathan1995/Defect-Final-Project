import axios from "axios";

class ProjectDataService {
  retrieveAllProjects(name) {
    //console.log('executed service')
    return axios.get(`http://localhost:8080/Defect/findAllProject`);
  }

  retrieveProject(name, id) {
    //console.log('executed service')
    return axios.get(`http://localhost:8080/Defect/getProjectById/${id}`);
  }

  deleteProject(id) {
    //console.log('executed service')
    return axios.delete(`http://localhost:8080/Defect/deleteProject/${id}`);
  }

  updateProject(id, projects) {
    //console.log('executed service')
    return axios.put(
      `http://localhost:8080/Defect/updateProject/${id}`,
      projects
    );
  }

  createProject(projects) {
    //console.log('executed service')
    return axios.post(`http://localhost:8080/Defect/saveProject`, projects);
  }
}

export default new ProjectDataService();
