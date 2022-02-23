import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import GithubProfile from '../components/GithubProfile'

class GithubSearchApp extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProfileReset = this.handleProfileReset.bind(this);
    }
    getInitialState = () => ({
        githubUsername: '',
        githubProfile: null,
        repos: null
    })

    handleUsernameChange(e) {
        this.setState({
            ...this.state, githubUsername: e.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let githubProfile = await this.getGithubProfile(this.state.githubUsername);
        this.setState({
            ...this.state, githubProfile: githubProfile
        });
        let repos = await this.getGithubRepos(this.state.githubUsername);
        this.setState({
            ...this.state, repos: repos
        });
        console.log(githubProfile);
        console.log(repos);
    }

    handleProfileReset() {
        this.setState(this.getInitialState());
    }

    async getGithubProfile(username) {
        let githubProfile = await fetch(
            `https://api.github.com/users/${username}`
        )
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
        return githubProfile;
    }

    async getGithubRepos(username) {
        let githubRepos = await fetch(
            `https://api.github.com/users/${username}/repos`
        )
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
        return githubRepos;
    }

    render() {
        return (
            <>
                <Row className='justify-content-center'>
                    <Col md={6} className='my-3'>
                        <form
                            className='row justify-content-center'
                            onSubmit={(event) => this.handleSubmit(event)}>
                            <div className='row mb-4 text-center'>
                                <input
                                    type='text'
                                    placeholder='Github username:'
                                    className='form-control text-center'
                                    value={this.state.githubUsername}
                                    onChange={this.handleUsernameChange}
                                />
                            </div>
                            <input
                                type='submit'
                                className='btn btn-dark btn-lg btn-block'
                                value='Search'
                            />
                        </form>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={6} className='my-3'>
                        <GithubProfile githubProfile={this.state.githubProfile} repos={this.state.repos} onReset={this.handleProfileReset}>

                        </GithubProfile>
                    </Col>
                </Row>

            </>
        );
    }
}

export default GithubSearchApp;