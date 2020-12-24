import React from 'react';

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
      <div className="notes-component">
        <div className="notes-container">{currNote}</div>
      </div>
    );
  }
}

export default NotesComponent;
