package com.sgic.defect.entities;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(schema = "defect_final", name = "project")
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long projectId;
    String projectName;
    String projectMembers;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectMembers() {
        return projectMembers;
    }

    public void setProjectMembers(String projectMembers) {
        this.projectMembers = projectMembers;
    }
}
