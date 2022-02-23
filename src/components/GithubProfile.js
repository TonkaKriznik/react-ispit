import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';

import GitHubRepo from './GithubRepo'

class GithubProfile extends Component {

    render() {
        if (this.props.githubProfile == undefined) {
            return null;
        }
        return (
            <>
                <Row className='justify-content-center'>
                    <Col md={12} className='my-3'>
                        <img src={this.props.githubProfile.avatar_url} />
                        <span>{this.props.githubProfile.bio}</span>
                    </Col>
                </Row>
                {this.props.repos != undefined ? (
                    <Row>
                        <ul>
                            {this.props.repos.map(repo => (
                                <li key={repo.id}>
                                    <GitHubRepo repo={repo}></GitHubRepo>
                                </li>
                            ))}
                        </ul>
                    </Row>
                ) : (
                    <span></span>
                )}

                <Row className='justify-content-center'>
                    <Col md={12} className='my-3'>
                        <button onClick={this.props.onReset}>Reset</button>
                    </Col>
                </Row>
            </>
        );
    }
}

GithubProfile.propTypes = {
    githubProfile: PropTypes.object
};

export default GithubProfile;