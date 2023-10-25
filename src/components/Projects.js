import React from 'react';
import '../css/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        <li className="project-item">
          <h3>Order Management System: Migrating Monolithic to Modernized</h3>
          <p>Duration: 1.4 years</p>
          <p>Team member: 4</p>
          <p>
            Analysis and Understanding:
            <ul>
              <li>Collaborated with the development team to understand the existing monolithic application.</li>
              <li>Analyzed the codebase to identify components suitable for migration to microservices.</li>
            </ul>
          </p>
          <p>
            Technology Evaluation:
            <ul>
              <li>Assisted in evaluating technologies and frameworks for the modernized architecture.</li>
              <li>Assessed the feasibility of Spring Boot, Node.js, and React for migration.</li>
              <li>Explored Google Cloud Platform (GCP) for hosting the application.</li>
            </ul>
          </p>
          <p>
            Microservices Development:
            <ul>
              <li>Actively participated in developing microservices using Spring Boot.</li>
              <li>Followed best practices for modular design and RESTful API implementation.</li>
              <li>Ensured code quality and coding standards adherence with senior engineers.</li>
            </ul>
          </p>
          <p>
            Frontend Development:
            <ul>
              <li>Implemented user interfaces using React.</li>
              <li>Collaborated with the frontend team to integrate with backend microservices.</li>
            </ul>
          </p>
          <p>
            Pipeline Migration:
            <ul>
              <li>Assisted in migrating the CI/CD pipeline from Azure Repo to GCP.</li>
              <li>Worked with the DevOps team to configure necessary infrastructure.</li>
            </ul>
          </p>
          <p>
            Testing and Bug Fixing:
            <ul>
              <li>Wrote unit tests and conducted integration testing.</li>
              <li>Ensured functionality and stability of migrated microservices.</li>
              <li>Identified and fixed bugs during testing.</li>
            </ul>
          </p>
          <p>
            Documentation Support:
            <ul>
              <li>Contributed to architecture, API contract, and deployment documentation.</li>
              <li>Ensured a smooth transition for future development and maintenance.</li>
            </ul>
          </p>
          <p>
            Learning and Growth:
            <ul>
              <li>Actively learned new technologies and frameworks.</li>
              <li>Enhanced skills in Spring Boot, React, and GCP.</li>
            </ul>
          </p>
        </li>
        <li className="project-item">
          <h3>Assets Tracker</h3>
          <p>Duration: 5 months</p>
          <p>Team Member: 3</p>
          <p>
            The "Asset Tracker" project aims to create a robust asset management solution utilizing the power of Microsoft Power Apps, Power Automate, and SharePoint Lists. This project addresses the need for efficient tracking, maintenance, and utilization of assets within our organization by leveraging the capabilities of these Microsoft tools.
          </p>
          <p>
            Objectives:
            <ul>
              <li>Reusable Assets are built in such a way that they can be reused in multiple projects. They can be Software components, Code modules or scripts, Frameworks, Documented processes.</li>
              <li>This can save momentous time and effort in creating solutions across the organization.</li>
              <li>Assets Tracker is a solution that allows developers to document such assets and allows developers to search and discover assets and reuse them in their projects. It also captures the reuse of assets to track the effort saved.</li>
            </ul>
          </p>
          <p>
            Duties and Obligations:
            <ul>
              <li>Built on Microsoft Office 365 Platform provides features like creating new asset entries, modifying, reviewing, discovering, automated tracking of usage with a user-friendly interface using Power Apps, SharePoint List, and Power Automate.</li>
              <li>Designed to efficiently manage Assets and Usage Logs within an organization.</li>
            </ul>
          </p>
        </li>
        {/* Add more projects here */}
      </ul>
    </div>
  );
}

export default Projects;
