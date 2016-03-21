import React, {Component} from 'react';

class bgVideo extends Component {
  render() {
    return (
        <video autoPlay muted loop poster="/public/image/london.png">
          <source src="/public/video/bg.webm" type="video/webm" />
          <source src="/public/video/bg.mp4" type="video/mp4" />
        </video>
    );
  }
}

export default bgVideo;
