import React from 'react';

import './NotesComponent.css';
import { Divider } from 'antd';
import TrebleClef from '../../images/treble-clef.svg';
import BassClef from '../../images/bass-clef.svg';
import StaffComponent from '../staff/StaffComponent';

class NotesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currNote: 0,
    };
  }

  render() {
    const { currNote } = this.state;
    return (
      <div className="notes-container">
        {currNote}
        <div className="staff">
          <div className="treble-clef">
            <img src={TrebleClef} alt="Treble Clef" />
          </div>
          <StaffComponent currentIndex={currNote} maxNotes={5} />
        </div>
        <Divider />
        <div className="staff">
          <div className="bass-clef">
            <img src={BassClef} alt="Bass Clef" />
          </div>
          <StaffComponent />
        </div>
      </div>
    );
  }
}

export default NotesComponent;
