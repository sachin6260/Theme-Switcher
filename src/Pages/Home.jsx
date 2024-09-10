import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSun, faMoon, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Import the external CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Theme Switcher App</h1>
      <p className="home-paragraph">
        <FontAwesomeIcon icon={faCogs} /> The Theme Switcher App is a modern web application built using React that demonstrates how to implement dynamic theme switching. 
        In today's web, user experience is key, and allowing users to choose their preferred theme can significantly enhance the overall experience.
      </p>
      <h2 className="home-subheading">
        <FontAwesomeIcon icon={faSun} /> Why Theme Switching Matters
      </h2>
      <p className="home-paragraph">
        Theme switching is not just about aesthetics—it's about accessibility and comfort. Dark mode helps reduce eye strain, while light mode offers a bright interface for daytime use.
      </p>
      <h2 className="home-subheading">
        <FontAwesomeIcon icon={faMoon} /> How It Works
      </h2>
      <p className="home-paragraph">
        The app uses React's state management and `useState` hook to toggle themes, with the user's choice saved in local storage to persist across sessions.
      </p>
      <h2 className="home-subheading">
        <FontAwesomeIcon icon={faInfoCircle} /> Get Started
      </h2>
      <p className="home-paragraph">
        Toggle the theme using the button in the navbar. The app will dynamically adjust its appearance based on your selection.
      </p>
    </div>
  );
};

export default Home;
