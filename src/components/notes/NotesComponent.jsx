import React from 'react';

import './NotesComponent.css';
import { Divider } from 'antd';
import TrebleClef from '../../images/treble-clef.svg';
import BassClef from '../../images/bass-clef.svg';
import StaffComponent from '../staff/StaffComponent';

const TEST_NOTES = [
  {
    note: 'B-3',
    isBassNote: true,
  },
  {
    note: 'G-4',
    isBassNote: false,
  },
  {
    note: 'F-4',
    isBassNote: false,
  },
  {
    note: 'A-3',
    isBassNote: true,
  },
  {
    note: 'G-2',
    isBassNote: true,
  },
];

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
          <StaffComponent
            notes={TEST_NOTES}
            currentIndex={currNote}
            maxNotes={5}
          />
        </div>
        <Divider />
        <div className="staff">
          <div className="bass-clef">
            <img src={BassClef} alt="Bass Clef" />
          </div>
          <StaffComponent
            useBassNotes
            notes={TEST_NOTES}
            currentIndex={currNote}
            maxNotes={5}
          />
        </div>
      </div>
    );
  }
}

export default NotesComponent;
