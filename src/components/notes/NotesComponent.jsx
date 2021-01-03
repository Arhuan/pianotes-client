import React from 'react';

import './NotesComponent.css';
import { Divider, Input } from 'antd';
import TrebleClef from '../../images/treble-clef.svg';
import BassClef from '../../images/bass-clef.svg';
import StaffComponent from '../staff/StaffComponent';
import APIService from '../../services/APIService';

const MAX_NOTES = 5;

class NotesComponent extends React.Component {
  startIndex = 0;

  endIndex = MAX_NOTES;

  constructor(props) {
    super(props);
    this.state = {
      staffCursorIndex: 0,
      currNote: 0,
      notes: [],
      staffNotes: [],
      commandLineText: '',
    };
  }

  async componentDidMount() {
    try {
      let notes = await APIService.get('notes/1000');
      notes = notes.map((note) => ({
        note: note.note,
        isBassNote: note.clef === 'BASS',
        octave: note.octave,
      }));
      this.setState({
        notes,
        staffNotes: notes.slice(this.startIndex, this.endIndex),
      });
    } catch (err) {
      // console.log(err.message);
    }
  }

  handleKeyPress = (event) => {
    const { notes, staffCursorIndex, currNote } = this.state;
    const charCode = event.which || event.keyCode;
    const charStr = String.fromCharCode(charCode);

    this.setState({ commandLineText: charStr });

    if (currNote >= notes.length) {
      return;
    }

    if (charStr.toUpperCase() === notes[currNote].note.charAt(0)) {
      if (staffCursorIndex + 1 === MAX_NOTES) {
        this.startIndex += MAX_NOTES;
        this.endIndex += MAX_NOTES;

        if (this.startIndex >= notes.length || this.endIndex > notes.length) {
          return;
        }

        this.setState({
          staffCursorIndex: 0,
          currNote: currNote + 1,
          staffNotes: notes.slice(this.startIndex, this.endIndex),
        });
      } else {
        this.setState({
          staffCursorIndex: staffCursorIndex + 1,
          currNote: currNote + 1,
        });
      }
    }
  };

  render() {
    const { staffNotes, staffCursorIndex, commandLineText } = this.state;

    return (
      <div className="notes-container">
        <div className="staff">
          <div className="treble-clef">
            <img src={TrebleClef} alt="Treble Clef" />
          </div>
          <StaffComponent
            notes={staffNotes}
            currentIndex={staffCursorIndex}
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
            notes={staffNotes}
            currentIndex={staffCursorIndex}
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
