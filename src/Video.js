import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import videojs from 'video.js'

class Video extends Component {
    componentDidMount() {
        const videoId = decodeURIComponent(this.props.match.params.id);
        console.log(videoId);
        const videoOpts = {
            autoplay: true,
            controls: false,
            sources: [{
                src: `/videos/${ videoId }`,
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
                <div className="center-v">
                    <video ref={(vid) => { this.video = vid; }} ></video>
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