import { useState, useMemo } from 'react';
import { reviews, mentors } from '../data/mockData';
import './Reviews.css';

export default function Reviews() {
  const [filterRating, setFilterRating] = useState('all');

  const allReviews = reviews;

  const filteredReviews = useMemo(() => {
    if (filterRating === 'all') return allReviews;
    return allReviews.filter(r => r.rating === Number(filterRating));
  }, [filterRating, allReviews]);

  const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
  const totalReviews = allReviews.length;

  const ratingBreakdown = [5, 4, 3, 2, 1].map(rating => {
    const count = allReviews.filter(r => r.rating === rating).length;
    return { rating, count, percent: (count / totalReviews) * 100 };
  });

  const getMentorName = (mentorId) => {
    const m = mentors.find(m => m.id === mentorId);
    return m ? m.name : 'Unknown';
  };

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="reviews-header">
          <h1>What Our <span className="gradient-text">Mentees Say</span></h1>
          <p>Real reviews from real people who transformed their careers with Steply.</p>
        </div>

        <div className="reviews-layout">
          {/* Stats Sidebar */}
          <aside className="reviews-stats glass-card">
            <div className="overall-rating">
              <span className="big-rating">{avgRating}</span>
              <div className="stars" style={{ fontSize: '1.2rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ opacity: i < Math.round(avgRating) ? 1 : 0.3 }}>★</span>
                ))}
              </div>
              <p>{totalReviews} reviews</p>
            </div>

            <div className="rating-breakdown">
              {ratingBreakdown.map(item => (
                <button
                  key={item.rating}
                  className={`breakdown-row ${filterRating === String(item.rating) ? 'active' : ''}`}
                  onClick={() => setFilterRating(filterRating === String(item.rating) ? 'all' : String(item.rating))}
                >
                  <span className="breakdown-label">{item.rating} ★</span>
                  <div className="breakdown-bar">
                    <div className="breakdown-fill" style={{ width: `${item.percent}%` }}></div>
                  </div>
                  <span className="breakdown-count">{item.count}</span>
                </button>
              ))}
            </div>

            {filterRating !== 'all' && (
              <button className="btn btn-ghost btn-sm" onClick={() => setFilterRating('all')} style={{ width: '100%', marginTop: '12px' }}>
                Clear Filter
              </button>
            )}
          </aside>

          {/* Reviews List */}
          <div className="reviews-list">
            {filteredReviews.map(review => (
              <div key={review.id} className="review-card glass-card">
                <div className="review-card-header">
                  <div className="review-author-info">
                    <img src={review.avatar} alt={review.userName} className="avatar" />
                    <div>
                      <strong>{review.userName}</strong>
                      <p className="review-mentor-link">Mentored by {getMentorName(review.mentorId)}</p>
                    </div>
                  </div>
                  <div className="review-card-meta">
                    <div className="stars">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="review-card-date">{review.date}</span>
                  </div>
                </div>
                <p className="review-card-text">{review.text}</p>
                <div className="review-card-footer">
                  <button className="btn btn-ghost btn-sm">👍 Helpful ({review.helpful})</button>
                </div>
              </div>
            ))}

            {filteredReviews.length === 0 && (
              <div className="no-results" style={{ padding: '60px' }}>
                <h3>No reviews with this rating</h3>
                <p>Try a different filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
