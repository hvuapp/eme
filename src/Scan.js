import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Instascan from 'instascan';
import videoNames from './videoNames';

class Scan extends Component {
    componentDidMount() {
        this.scanner = new Instascan.Scanner({ video: this.video });
        this.scanner.addListener('scan', (key) => {
            if (key && videoNames[key.toLocaleUpperCase()]) {
                this.props.history.push(`/video/${key.toLocaleUpperCase()}`);
            }
            else {
                alert(`Dish not found: ${key}`)
            }
        });
        Instascan.Camera.getCameras().then((cameras) => {
            if (cameras.length > 0) {
                this.scanner.start(cameras[0]);
            } else {
                console.error('No cameras found.');
            }
        }).catch(function (e) {
            console.error(e);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="center-v">
                    <span className="scan-help">Place the code inside the frame below</span>
                    <video className="scan-video" ref={(vid) => { this.video = vid; }} ></video>
                </div>
                <Link className="btn-back" to="/">Back</Link>
            </div>
        );
    }

    componentWillUnmount() {
        if (this.scanner) {
            this.scanner.stop().then(() => console.log('Scanner stopped'));
        }
    }
}

export default withRouter(Scan);