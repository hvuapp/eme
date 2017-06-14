import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import videoNames from './videoNames';

class Video extends Component {
    componentDidMount() {
        const videoId = decodeURIComponent(this.props.match.params.id);
        const videoUrl = videoNames[videoId.toLocaleUpperCase()];
        this.videoUrl = videoUrl;
        this.video.src = videoUrl;
    }

    render() {
        return (
            <div className="container">
                <div className="center-v">
                    <video autoPlay="true" controls className="dish-video" ref={(vid) => { this.video = vid; }} ></video>
                </div>
                <span>{this.videoUrl}</span>
                <Link className="btn-back" to="/">Back</Link>
            </div>
        );
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }
}

export default withRouter(Video);