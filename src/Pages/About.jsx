import React from 'react';

const About = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
        fontFamily: 'Arial, sans-serif',
       }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '2.5rem',
         }}
      >
        About the Theme Switcher App
      </h1>
      <p>
        The Theme Switcher App is designed to showcase the ease of implementing a dynamic theme toggling system in React. By providing a light and dark mode, this app allows users to personalize their browsing experience.
      </p>
      <h2
        style={{
          marginTop: '30px',
          marginBottom: '15px',
          fontSize: '2rem',
         }}
      >
        Features of the App
      </h2>
      <ul
        style={{
          paddingLeft: '20px',
          listStyleType: 'disc',
        }}
      >
        <li>Dynamic theme switching between light and dark mode.</li>
        <li>State management using React hooks.</li>
        <li>Theme persistence using local storage.</li>
        <li>FontAwesome icons for enhanced UI/UX.</li>
      </ul>
      <p style={{ marginTop: '20px'   }}>
        This project is an excellent example of how to incorporate user preferences into modern web applications. By enabling users to toggle between themes, developers can provide a more personalized and accessible experience.
      </p>
      <p>
        The Theme Switcher App is a demonstration of how powerful React can be when it comes to building dynamic and interactive user interfaces.
      </p>
    </div>
  );
};

export default About;
