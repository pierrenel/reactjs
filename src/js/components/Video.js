import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
        <video autoPlay muted loop poster="/src/media/london.png">
          <source src='/src/media/london.mp4' type="video/mp4" />
        </video>
    );
  }
}
