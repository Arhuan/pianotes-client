import React from 'react';
import NotesComponent from '../../components/notes/NotesComponent';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="notes-component">
        <NotesComponent />
      </div>
    </div>
  );
}

export default HomePage;
