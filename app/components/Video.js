import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
        <video autoPlay muted loop poster="/public/london.png">
          <source src="/public/london.mp4" type="video/mp4" />
        </video>
    );
  }
}
