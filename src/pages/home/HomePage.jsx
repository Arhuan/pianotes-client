import React from 'react';
import NotesComponent from '../../components/notes/NotesComponent';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      a tool to help you memorize musical notes for the piano
      <div className="notes-component">
        <NotesComponent />
      </div>
    </div>
  );
}

export default HomePage;
