import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import MusicalNote from '../../images/musical-note.svg';

import './StaffComponent.css';

const TREBLE_NOTES = [
  'B-5',
  'A-5',
  'G-5',
  'F-5',
  'E-5',
  'D-5',
  'C-5',
  'B-4',
  'A-4',
  'G-4',
  'F-4',
  'E-4',
  'D-4',
  'C-4',
  // notes below here will currently not be generated, used for spacing.
  'B-3',
  'A-3',
];

const BASS_NOTES = [
  'D-4',
  'C-4',
  // notes above here will currently not be generated, used for spacing.
  'B-3',
  'A-3',
  'G-3',
  'F-3',
  'E-3',
  'D-3',
  'C-3',
  'B-2',
  'A-2',
  'G-2',
  'F-2',
  'E-2',
  'D-2',
  'C-2',
];

class StaffComponent extends React.Component {
  static useStaffLine(index) {
    return index % 2 !== 0 && index > 2 && index < 12;
  }

  getRows() {
    const rows = [];
    const { useBassNotes } = this.props;
    const notes = useBassNotes ? BASS_NOTES : TREBLE_NOTES;

    for (let i = 0; i < notes.length; i += 1) {
      rows.push(
        <Row
          key={notes[i]}
          className={`staff-row ${
            StaffComponent.useStaffLine(i) ? 'strikethrough' : ''
          }`}
        >
          {this.getCols(i, notes[i])}
        </Row>
      );
    }
    return rows;
  }

  getCols(rowIndex, rowNote) {
    const cols = [];
    const { currentIndex, maxNotes, notes, useBassNotes } = this.props;
    const staffType = useBassNotes ? 'bass' : 'treble';

    for (let i = 0; i < maxNotes && i < notes.length; i += 1) {
      const formattedNote = `${notes[i].note}-${notes[i].octave}`;

      cols.push(
        <Col
          key={`${staffType}-${rowNote}-col-${i}`}
          className={`staff-col ${i === currentIndex ? 'cursor' : ''}`}
        >
          {notes[i].isBassNote === useBassNotes && formattedNote === rowNote ? (
            <div className="note">
              <img
                className={`note-svg ${this.getNoteStrikethroughStyle(
                  formattedNote
                )}`}
                src={MusicalNote}
                alt="note"
              />
            </div>
          ) : null}
        </Col>
      );
    }
    return cols;
  }

  getNoteStrikethroughStyle(note) {
    const { useBassNotes } = this.props;

    if (useBassNotes) {
      switch (note) {
        case 'E-2':
        case 'C-2':
          return 'strikethrough';
        case 'D-2':
          return 'strikethrough top';
        default:
          return '';
      }
    } else {
      switch (note) {
        case 'A-5':
          return 'strikethrough';
        case 'B-5':
          return 'strikethrough bottom';
        default:
          return '';
      }
    }
  }

  render() {
    return <div className="staff-notes">{this.getRows()}</div>;
  }
}

StaffComponent.defaultProps = {
  notes: [],
  maxNotes: 5,
  useBassNotes: false,
};

StaffComponent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      isBassNote: PropTypes.bool,
      note: PropTypes.string,
      octave: PropTypes.number,
    })
  ),
  maxNotes: PropTypes.number,
  useBassNotes: PropTypes.bool,
};

export default StaffComponent;
