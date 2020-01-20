import React from 'react';
import './Points.css';

class Points extends React.Component {
  constructor() {
    super();
    this.state = { points: 0, clicks: 0 };
  }

  updatePoints(state) {
    this.setState({ points: state.points, clicks: state.clicks });
  }

  render() {
    return (
      <p className="points">
        <span>Points: {this.state.points}</span>
        <br />
        <span>Clicks needed for next award: {this.state.clicks}</span>
      </p>
    );
  }
}
export default Points;
