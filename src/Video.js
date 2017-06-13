import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import videojs from 'video.js'
import videoNames from './videoNames';

class Video extends Component {
    componentDidMount() {
        const videoId = decodeURIComponent(this.props.match.params.id);
        const videoUrl = videoNames[videoId];
        const videoOpts = {
            autoplay: true,
            controls: false,
            sources: [{
                src: videoUrl,
                type: 'video/mp4'
            }]
        };
        this.player = videojs(this.video, videoOpts, () => {
            console.log('onPlayerReady');
        });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <video className="dish-video" ref={(vid) => { this.video = vid; }} ></video>
                </div>
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