import React from 'react';
import './SoundControl.css';

class SoundControl extends React.Component {
  onClickCheckbox = e => {
    // Change sound status to checkbox status
    this.props.onChange(e.target.checked);
  };

  render() {
    return (
      <p>
        <span className="soundtext">Sound:</span>
        <input
          type="checkbox"
          className="soundstatus"
          onChange={this.onClickCheckbox}
        />
      </p>
    );
  }
}
export default SoundControl;
