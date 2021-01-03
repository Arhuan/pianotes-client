import React from 'react';

import './NotesComponent.css';
import { Divider, Input } from 'antd';
import TrebleClef from '../../images/treble-clef.svg';
import BassClef from '../../images/bass-clef.svg';
import StaffComponent from '../staff/StaffComponent';

const MAX_NOTES = 5;

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
  {
    note: 'G-2',
    isBassNote: true,
  },
  {
    note: 'G-2',
    isBassNote: true,
  },
  {
    note: 'G-2',
    isBassNote: true,
  },
  {
    note: 'G-2',
    isBassNote: true,
  },
  {
    note: 'G-2',
    isBassNote: true,
  },
];

class NotesComponent extends React.Component {
  startIndex = 0;

  endIndex = MAX_NOTES;

  constructor(props) {
    super(props);
    this.state = {
      currNote: 0,
      notes: TEST_NOTES.slice(this.startIndex, this.endIndex),
      commandLineText: '',
    };
  }

  handleKeyPress = (event) => {
    const { currNote } = this.state;

    if (currNote + 1 === MAX_NOTES) {
      this.startIndex += MAX_NOTES;
      this.endIndex += MAX_NOTES;

      if (
        this.startIndex >= TEST_NOTES.length ||
        this.endIndex > TEST_NOTES.length
      ) {
        return;
      }

      this.setState({
        currNote: 0,
        notes: TEST_NOTES.slice(this.startIndex, this.endIndex),
      });
    } else {
      this.setState({ currNote: currNote + 1 });
    }

    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);
    this.setState({ commandLineText: charStr });
  };

  render() {
    const { notes, currNote, commandLineText } = this.state;

    return (
      <div className="notes-container">
        <div className="staff">
          <div className="treble-clef">
            <img src={TrebleClef} alt="Treble Clef" />
          </div>
          <StaffComponent
            notes={notes}
            currentIndex={currNote}
            maxNotes={MAX_NOTES}
          />
        </div>
        <Divider />
        <div className="staff">
          <div className="bass-clef">
            <img src={BassClef} alt="Bass Clef" />
          </div>
          <StaffComponent
            useBassNotes
            notes={notes}
            currentIndex={currNote}
            maxNotes={MAX_NOTES}
          />
        </div>
        <Input
          className="command-line"
          size="large"
          bordered={false}
          onKeyPress={this.handleKeyPress}
          value={commandLineText}
          placeholder="Click here to begin"
        />
      </div>
    );
  }
}

export default NotesComponent;
