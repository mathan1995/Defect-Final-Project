package com.sgic.defect.controller;

import com.sgic.defect.entities.Project;
import com.sgic.defect.services.ProjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ProjectController {

    @Autowired
    ProjectService projectService;

    //LIST ALL PROJECTS
    @GetMapping("/findAllProject")
    public List<Project> findAllProject() {
        return projectService.getAllProject();
    }
    //GET PROJECT BY ID
    @GetMapping("/getProjectById/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id){
        return new ResponseEntity<Project>(projectService.findProjectById(id), HttpStatus.OK);
    }
    //DELETE PROJECT
    @DeleteMapping("/deleteProject/{id}")
    public ResponseEntity<Project> deleteProjectById(@PathVariable("id") Long id) {
        projectService.deleteProjectById(id);
        return new ResponseEntity<Project>(HttpStatus.ACCEPTED);
    }
    //UPDATE PROJECT
    @PutMapping("/updateProject")
    public ResponseEntity<Project> updateProject(@Valid @RequestBody Project project) {
        projectService.updateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }
    //SAVE PROJECT
    @PostMapping("/saveProject")
    public HttpStatus createBook(@Valid @RequestBody Project project) {
        projectService.saveProject(project);
        return HttpStatus.CREATED;
    }

}
