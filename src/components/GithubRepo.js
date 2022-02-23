import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const GithubRepo = ({ repo }) => {
    return (
      <div>
          <span>{repo.name}</span>
      </div>
    );
  };
  
  export default GithubRepo;