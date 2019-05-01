package com.sgic.defect.repositories;


import com.sgic.defect.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

//REPOSITORY EXTENDS JPA
public interface ProjectRepositories extends JpaRepository<Project, Long> {
    Project findProjectByprojectId(Long id);
}
