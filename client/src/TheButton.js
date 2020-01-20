import React from 'react';
import './TheButton.css';

class TheButton extends React.Component {
  constructor() {
    super();
    this.state = { soundstatus: false };
  }

  clickButton = () => {
    // Call onButtonClick function of Game component
    this.props.onButtonClick();
    // Creating sound for button press
    if (this.state.soundstatus === true) {
      const ctx = new AudioContext();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      const duration = 0.3;
      o.connect(g);
      g.connect(ctx.destination);
      o.start(0);
      g.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + duration);
      o.stop(ctx.currentTime + duration);
    }
  };

  updateSound = status => {
    this.setState({ soundstatus: status });
  };

  render() {
    return (
      <button
        type="button"
        className="TheButton"
        onClick={this.clickButton}
        onKeyUp={this.clickButton}
      >
        CLICK HERE TO EARN POINTS!
      </button>
    );
  }
}
export default TheButton;
