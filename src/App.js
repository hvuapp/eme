import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Scan from './Scan';
import Video from './Video';

const Home = () => (
  <div className="container food-bg">
    <div className="center">
      <Link className="btn btn-scan" to="/scan">Let's eat</Link>
      <Link className="btn btn-help" to="/help">How</Link>
    </div>
  </div>
);

const Help = () => (
  <div className="container food-bg">
    <ol className="center help-list">
      <li>Open EME App</li>
      <li>Open food images in the catalog</li>
      <li>Place QR Codes facing the camera</li>
      <li>Watch and enjoy the videos</li>
    </ol>
    <Link className="btn-back" to="/">Back</Link>
  </div>
);



class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/scan" component={Scan} />
          <Route path="/help" component={Help} />
          <Route path="/video/:id" component={Video} />
        </main>
      </Router>
    );
  }
}

export default App;
