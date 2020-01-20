import React from 'react';
import { withRouter } from 'react-router-dom';
import Points from './Points';
import TheButton from './TheButton';
import SoundControl from './SoundControl';

class Game extends React.Component {
  constructor() {
    super();
    // Create references for Points and TheButton components
    this.pointRef = React.createRef();
    this.buttonRef = React.createRef();
    // Add current points, needed clicks for next reward and
    // status of sound (false = no sound, true = sound) to state
    this.state = { points: 0, clicks: 0, soundstatus: false };
  }

  componentDidMount() {
    // Get points from backend and convert response to JSON
    fetch('/getpoints')
      .then(d => {
        return d.json();
      })
      .then(points => {
        // Update state with new points
        this.setState({
          points: points.points,
          clicks: points.clicks,
          soundstatus: this.state.soundstatus,
        });
        // Update Points component
        this.pointRef.current.updatePoints(this.state);
        // If points equal zero, start new game
        if (this.state.points === 0) {
          // Get new game
          fetch('/newgame')
            .then(d => {
              return d.json();
            })
            .then(newpoints => {
              // Update state with new game points
              this.setState({
                points: newpoints.points,
                clicks: newpoints.clicks,
                soundstatus: this.state.soundstatus,
              });
              // Update Points component
              this.pointRef.current.updatePoints(this.state);
            });
        }
      });
  }

  handleButtonClick = () => {
    // Send buttonclick to backend
    fetch('/clickbutton')
      .then(d => {
        return d.json();
      })
      .then(points => {
        // Update state with new game points
        this.setState({
          points: points.points,
          clicks: points.clicks,
          soundstatus: this.state.soundstatus,
        });
        // Update Points component
        this.pointRef.current.updatePoints(this.state);
        // If points go to zero, go to gameover
        if (this.state.points === 0) {
          this.props.history.push('/gameover');
        }
      });
  };

  handleSoundChange = status => {
    // Change status of sound and update it to TheButton component
    this.setState({
      points: this.state.points,
      clicks: this.state.clicks,
      soundstatus: status,
    });
    this.buttonRef.current.updateSound(status);
  };

  render() {
    return (
      <div>
        <Points ref={this.pointRef} />
        <TheButton
          ref={this.buttonRef}
          points={this.state.points}
          onButtonClick={this.handleButtonClick}
        />
        <SoundControl
          status={this.soundStatus}
          onChange={this.handleSoundChange}
        />
      </div>
    );
  }
}
export default withRouter(Game);
