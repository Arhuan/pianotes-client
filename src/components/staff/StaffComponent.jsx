import React from 'react';

import { Col, Row } from 'antd';

import './StaffComponent.css';

// eslint-disable-next-line no-unused-vars
const TREBLE_NOTES = [
  ['G'],
  ['F'],
  ['E'],
  ['D'],
  ['C'],
  ['B'],
  ['A'],
  ['G'],
  ['F'],
  ['E'],
  ['D'],
];

// eslint-disable-next-line no-unused-vars
const BASS_NOTES = [
  ['B'],
  ['A'],
  ['G'],
  ['F'],
  ['E'],
  ['D'],
  ['C'],
  ['B'],
  ['A'],
  ['G'],
  ['F'],
];

function StaffComponent() {
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

export default StaffComponent;
