import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Project.Navbar.css";

const ProjectNavbar = () => {
  return (
    <div>
      <div>
        <div className="project_navbar">
          <div className="project_heading_div">
            <h1 className="project_heading"> Projects </h1>
          </div>
          <div className="project_header_right">
            <div className="project_create_div">
              <Link to="" className="project_create_link">
                {" "}
                Create new <span className="project_span"> Project </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNavbar;
