import React from 'react';

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
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      currentIndex: 0,
    };
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

export default StaffComponent;
