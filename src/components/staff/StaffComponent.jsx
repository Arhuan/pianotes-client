import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import './StaffComponent.css';

const TREBLE_NOTES = [
  'G-5',
  'F-5',
  'E-5',
  'D-5',
  'C-5',
  'B-5',
  'A-5',
  'G-4',
  'F-4',
  'E-4',
  'D-4',
];

const BASS_NOTES = [
  'B-3',
  'A-3',
  'G-2',
  'F-2',
  'E-2',
  'D-2',
  'C-2',
  'B-2',
  'A-2',
  'G-1',
  'F-1',
];

class StaffComponent extends React.Component {
  getRows() {
    const rows = [];
    const { useBassNotes } = this.props;
    const notes = useBassNotes ? BASS_NOTES : TREBLE_NOTES;

    for (let i = 0; i < notes.length; i += 1) {
      if (i % 2 === 0) {
        rows.push(<Row key={notes[i]}>{this.getCols(notes[i])}</Row>);
      } else {
        rows.push(
          <Row key={notes[i]} className="strikethrough">
            {this.getCols(notes[i])}
          </Row>
        );
      }
    }
    return rows;
  }

  getCols(rowNote) {
    const cols = [];
    const { currentIndex, maxNotes, notes, useBassNotes } = this.props;

    for (let i = 0; i < maxNotes; i += 1) {
      if (i === currentIndex) {
        cols.push(
          <Col key={`${rowNote}-col-${i}`} className="notes-col cursor">
            {notes[i].isBassNote === useBassNotes && notes[i].note === rowNote
              ? 'O'
              : 'O'}
          </Col>
        );
      } else {
        cols.push(
          <Col key={`${rowNote}-col-${i}`} className="notes-col">
            {notes[i].isBassNote === useBassNotes && notes[i].note === rowNote
              ? 'O'
              : 'O'}
          </Col>
        );
      }
    }
    return cols;
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
    })
  ),
  maxNotes: PropTypes.number,
  useBassNotes: PropTypes.bool,
};

export default StaffComponent;
