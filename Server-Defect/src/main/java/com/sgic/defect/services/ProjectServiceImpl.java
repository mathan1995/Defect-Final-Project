package com.sgic.defect.services;

import com.sgic.defect.entities.Project;
import com.sgic.defect.repositories.ProjectRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService{

    //IMPORTING AND RENAMING PROJECT-REPOSITORIES
    @Autowired
    ProjectRepositories projectRepositories;

    @Override
    public void saveProject(Project project) {
        projectRepositories.save(project);
    }

    public List<Project> getAllProject() {
        return projectRepositories.findAll();
    }

    @Override
    public Project findProjectById(Long id) {
        return projectRepositories.findProjectByprojectId(id);
    }
    @Override
    public Project deleteProjectById(Long id) {
      projectRepositories.deleteById(id);
        return null;
    }

    @Override
    public void updateProject(Project project) {
        projectRepositories.save(project);

    }
}
