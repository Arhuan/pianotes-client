import React from 'react';
import NotesComponent from '../../components/notes/NotesComponent';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      a tool to help you memorize musical notes for the piano
      <NotesComponent />
    </div>
  );
}

export default HomePage;
