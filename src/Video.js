import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import videoNames from './videoNames';

class Video extends Component {
    componentWillMount() {
        const videoId = decodeURIComponent(this.props.match.params.id);
        const videos = videoNames;
        const video = videos[videoId.toLocaleUpperCase()];
        console.log(video);
        if (!video) {
            alert('Video not found: ' + videoId);
            this.video = [];
        }
        else {
            this.video = video;
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="center-v">
                    <video autoPlay="true" controls className="dish-video" ref={(vid) => { this.video = vid; }} >
                        {this.video.map(v=>(
                            <source key={v.type} src={v.src} type={v.type} />
                        ))}
                    </video>
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