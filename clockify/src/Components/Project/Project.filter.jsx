import React from "react";
import "./Styles/Project.filter.css";
import { ReactComponent as Search } from "../../assets/images/search.svg";

const ProjectFilter = () => {
  return (
    <div className="project_container">
      <div className="filter_div">
        <div className="filter_span_div">
          <span className="filter_span"> Filter </span>
        </div>
        <select className="active_tag" name="" id="">
          <option value="Active">Active</option>
          <option value="Archive">Archive</option>
          <option value="All">All</option>
        </select>
        <select className="active_tag" name="" id="">
          <option value="Client">Client</option>
          <option value="Active">Active</option>
          <option value="Archive">Archive</option>
          <option value="All">All</option>
        </select>
        <select className="active_tag" name="" id="">
          <option value="Access">Access</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="All">All</option>
        </select>
        <select className="active_tag" name="" id="">
          <option value="Billing">Billing</option>
          <option typeof="checkbox" value="Billable">
            Billable
          </option>
        </select>
        <div className="search_svg">
          <Search />
        </div>
        <input className="input_tag" type="text" placeholder="Project name" />
        <button className="applyfilter_button">APPLY FILTER</button>
      </div>

      <div className="project_heading">
        <h5>Projects</h5>
      </div>
      <table className="project_details">
        <input type="checkbox" />
        <label>NAME</label>
        <label className="client_label">CLIENT</label>
        <label className="amount_label">AMOUNT</label>
        <label className="progress_label">PROGRESS</label>
        <label className="access_label">ACCESS</label>
      </table>
    </div>
  );
};

export default ProjectFilter;
