import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span className="about-icon">🏢</span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">About LuxeHomes</h2>
          <p className="about-text">
            With over 15 years of experience in the real estate industry, LuxeHomes has become
            the trusted name for apartment rentals in major cities across the country.
          </p>
          <p className="about-text">
            We pride ourselves on providing exceptional living spaces that combine luxury,
            comfort, and convenience. Our carefully curated selection of apartments ensures
            that every resident finds their perfect home.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Residents</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Premium Properties</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
