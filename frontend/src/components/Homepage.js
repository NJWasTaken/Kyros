import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './contexts/Nav.js';
import { useAuth } from './contexts/AuthContext';
import './css/Homepage.css';

const Homepage = () => {
  const { user } = useAuth();

  const features1 = [
    {
      title: "Track Expenses",
      description: "Log and categorize your daily expenses with ease."
    },
    {
      title: "Get it Together",
      description: "Organize your life by prioritizing your tasks and keeping reminders."
    },
    {
      title: "What's New?",
      description: "Check the announcements page for announcements about the latest events."
    },
  ];

  const features2 = [
    {
      title: "Looking Ahead",
      description: "Plan what's next by updating your calendar and always looking at the big picture."
    },
    {
      title: "Identify Yourself",
      description: "Manage your own personal profile and keep track of yourself throughout your student life."
    },
  ];

  return (
    <div className="page-container">
      <Navigation 
        isAuthenticated={!!user}
      />

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
          <img src="logo.png" alt="Logo" className='hero-logo' /><br></br>
            Welcome to Kyros
          </h1>
          <p className="hero-description">
            Keep track of your student life with a to-do list, calendar planner, expense tracker and more.
          </p>
          <Link to="/login" className="get-started-btn">
            Get Started
          </Link>
        </section>
        <br></br>
        <div className="features-grid-1">
          {features1.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ animationDelay: `${0.2 * index}s`, alignSelf: 'center'}}
            >
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-grid-2">
          {features2.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ animationDelay: `${0.2 * index}s`, alignSelf: 'center'}}
            >
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;