package com.sgic.defect.services;

import com.sgic.defect.entities.Project;

import java.util.List;

public interface ProjectService {
    void saveProject(Project project);      // save Project
     List<Project> getAllProject();		    //	Get All Project
    Project findProjectById(Long id);       // find project by Id - projectId
    Project deleteProjectById(Long id);	    //	Delete Project By Id
    void updateProject(Project project);	//	Update Project
}
