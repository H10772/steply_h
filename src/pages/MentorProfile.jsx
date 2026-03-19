import { useParams, Link } from 'react-router-dom';
import { mentors, reviews } from '../data/mockData';
import './MentorProfile.css';

export default function MentorProfile() {
  const { id } = useParams();
  const mentor = mentors.find(m => m.id === Number(id));
  const mentorReviews = reviews.filter(r => r.mentorId === Number(id));

  if (!mentor) {
    return (
      <div className="profile-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: '200px' }}>
          <h2>Mentor not found</h2>
          <Link to="/mentors" className="btn btn-primary" style={{ marginTop: '20px' }}>Browse Mentors</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        {/* Hero */}
        <div className="profile-hero glass-card">
          <div className="profile-hero-bg"></div>
          <div className="profile-hero-content">
            <img src={mentor.avatar} alt={mentor.name} className="avatar avatar-xl profile-avatar" />
            <div className="profile-hero-info">
              <h1>{mentor.name}</h1>
              <p className="profile-role">{mentor.title} at <strong>{mentor.company}</strong></p>
              <div className="profile-meta">
                <span className="profile-rating">
                  <span className="star">★</span> {mentor.rating} ({mentor.reviews} reviews)
                </span>
                <span>📅 {mentor.sessions} sessions</span>
                <span>⏱ {mentor.responseTime} response</span>
                <span>🕗 {mentor.experience} experience</span>
              </div>
            </div>
            <div className="profile-hero-actions">
              <Link to={`/booking/${mentor.id}`} className="btn btn-primary btn-lg">Book a Session</Link>
              <button className="btn btn-secondary">Message</button>
            </div>
          </div>
        </div>

        <div className="profile-grid">
          {/* Main Content */}
          <div className="profile-main">
            {/* About */}
            <section className="profile-section glass-card">
              <h2 className="profile-section-title">About</h2>
              <p className="profile-bio">{mentor.bio}</p>
            </section>

            {/* Skills */}
            <section className="profile-section glass-card">
              <h2 className="profile-section-title">Expertise</h2>
              <div className="profile-skills">
                {mentor.skills.map(skill => (
                  <span key={skill} className="badge badge-accent">{skill}</span>
                ))}
              </div>
            </section>

            {/* Details */}
            <section className="profile-section glass-card">
              <h2 className="profile-section-title">Details</h2>
              <div className="profile-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Languages</span>
                  <span className="detail-value">{mentor.languages.join(', ')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">{mentor.availability}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Response Time</span>
                  <span className="detail-value">{mentor.responseTime}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Experience</span>
                  <span className="detail-value">{mentor.experience}</span>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="profile-section glass-card">
              <h2 className="profile-section-title">Reviews ({mentorReviews.length})</h2>
              {mentorReviews.length > 0 ? (
                <div className="profile-reviews">
                  {mentorReviews.map(review => (
                    <div key={review.id} className="profile-review">
                      <div className="review-header">
                        <img src={review.avatar} alt={review.userName} className="avatar" />
                        <div>
                          <strong>{review.userName}</strong>
                          <div className="stars">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-reviews-text">No reviews yet for this mentor.</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="profile-sidebar">
            {/* Pricing */}
            <div className="sidebar-card glass-card">
              <h3>Mentorship Plan</h3>
              <div className="pricing-card">
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="amount">{mentor.price}</span>
                  <span className="period">/month</span>
                </div>
                <ul className="pricing-features">
                  <li>✓ Unlimited Q&A via chat</li>
                  <li>✓ 2x 1-on-1 calls per month</li>
                  <li>✓ Personalized roadmap</li>
                  <li>✓ Code / portfolio reviews</li>
                  <li>✓ Resume & interview support</li>
                </ul>
                <Link to={`/booking/${mentor.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                  Start Mentorship
                </Link>
              </div>
            </div>

            {/* Quick Session */}
            <div className="sidebar-card glass-card">
              <h3>One-off Session</h3>
              <div className="quick-session-options">
                <div className="quick-option">
                  <span>📞 Introductory Call</span>
                  <span className="quick-price">Free</span>
                </div>
                <div className="quick-option">
                  <span>📋 Career Coaching</span>
                  <span className="quick-price">$50</span>
                </div>
                <div className="quick-option">
                  <span>🎯 Mock Interview</span>
                  <span className="quick-price">$75</span>
                </div>
              </div>
              <Link to={`/booking/${mentor.id}`} className="btn btn-secondary" style={{ width: '100%', marginTop: '16px' }}>
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
