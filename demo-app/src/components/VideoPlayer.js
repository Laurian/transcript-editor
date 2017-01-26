import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.video.addEventListener('play', () => this.startInterval());
    this.video.addEventListener('pause', () => this.stopInterval());
    this.video.addEventListener('seeked', () => this.updateTime());
    // this.video.addEventListener('timeupdate', (e) => {
    //   console.log(e.srcElement.currentTime);
    //   this.props.onTimeUpdate(e.srcElement.currentTime);
    // });
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.updateTime();
    }, 100);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({
      currentTime: this.video.currentTime,
    });
    this.props.onTimeUpdate(this.video.currentTime);
  }

  render() {
    return (
      <div>
        <video
          ref={(c) => { this.video = c; }}
          src={`${process.env.PUBLIC_URL}/video.mp4`}
          controls
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoId: React.PropTypes.string,
  onTimeUpdate: React.PropTypes.func,
};

export default VideoPlayer;