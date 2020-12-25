import React from 'react';

import { Col, Divider, Row } from 'antd';

import './NotesComponent.css';
import TrebleClef from '../../images/treble-clef.svg';
import BassClef from '../../images/bass-clef.svg';

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
        <div className="staff">
          <div className="treble-clef">
            <img src={TrebleClef} alt="Treble Clef" />
          </div>
          <div className="staff-notes">
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">{currNote}</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
          </div>
        </div>
        <div className="staff">
          <div className="bass-clef">
            <img src={BassClef} alt="Bass Clef" />
          </div>
          <div className="staff-notes">
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">{currNote}</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
            <Divider className="notes-line" />
            <Row>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
              <Col className="notes-col">o</Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesComponent;
