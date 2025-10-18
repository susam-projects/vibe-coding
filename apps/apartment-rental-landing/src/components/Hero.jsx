import React from "react"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Home</h1>
        <p className="hero-subtitle">
          Discover luxury apartments in prime locations. Your dream living space awaits.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Get Started
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" 
          alt="Luxury apartment interior" 
          className="hero-img"
        />
      </div>
    </section>
  )
}

export default Hero
