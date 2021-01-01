import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import './StaffComponent.css';

// eslint-disable-next-line no-unused-vars
const NUM_COLS = 5;
// eslint-disable-next-line no-unused-vars
const TREBLE_NOTES = [
  ['G-5'],
  ['F-5'],
  ['E-5'],
  ['D-5'],
  ['C-5'],
  ['B-5'],
  ['A-5'],
  ['G-4'],
  ['F-4'],
  ['E-4'],
  ['D-4'],
];
// eslint-disable-next-line no-unused-vars
const BASS_NOTES = [
  ['B-3'],
  ['A-3'],
  ['G-2'],
  ['F-2'],
  ['E-2'],
  ['D-2'],
  ['C-2'],
  ['B-2'],
  ['A-2'],
  ['G-1'],
  ['F-1'],
];

class StaffComponent extends React.Component {
  getRows() {
    const rows = [];
    const notes = BASS_NOTES;
    for (let i = 0; i < notes.length; i += 1) {
      rows.push(<Row>{this.getCols()}</Row>);
    }
    return rows;
  }

  getCols() {
    const cols = [];
    const { currentIndex, maxNotes } = this.props;
    for (let i = 0; i < maxNotes; i += 1) {
      if (i === currentIndex) {
        cols.push(<Col className="notes-col cursor">0</Col>);
      } else {
        cols.push(<Col className="notes-col">0</Col>);
      }
    }
    return cols;
  }

  render() {
    return (
      <div className="staff-notes">
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row className="strikethrough">
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row className="strikethrough">
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row className="strikethrough">
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row className="strikethrough">
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row className="strikethrough">
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
        <Row>
          <Col className="notes-col cursor">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
          <Col className="notes-col">O</Col>
        </Row>
      </div>
    );
  }
}

StaffComponent.defaultProps = {
  maxNotes: 5,
};

StaffComponent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  maxNotes: PropTypes.number,
};

export default StaffComponent;
