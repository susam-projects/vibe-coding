import React from "react"
import "./Features.css"

function Features() {
  const features = [
    {
      icon: "✓",
      title: "Easy Booking",
      description: "Simple and secure online booking process. Reserve your apartment in minutes."
    },
    {
      icon: "⌘",
      title: "Prime Locations",
      description: "Apartments in the best neighborhoods with excellent connectivity and amenities."
    },
    {
      icon: "★",
      title: "Premium Quality",
      description: "Luxury furnishings and modern facilities for a comfortable living experience."
    },
    {
      icon: "●",
      title: "Safe & Secure",
      description: "24/7 security, CCTV surveillance, and secure access control systems."
    },
    {
      icon: "$",
      title: "Best Prices",
      description: "Competitive pricing with flexible payment options and no hidden fees."
    },
    {
      icon: "◆",
      title: "24/7 Support",
      description: "Dedicated customer support team available round the clock for assistance."
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">Why Choose LuxeHomes?</h2>
        <p className="section-subtitle">We provide the best apartment rental experience</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
