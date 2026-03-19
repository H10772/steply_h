import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mentors, categories } from '../data/mockData';
import './MentorDirectory.css';

export default function MentorDirectory() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filteredMentors = useMemo(() => {
    let result = [...mentors];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.skills.some(s => s.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(m => m.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(m => m.price >= min && m.price <= max);
    }

    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

    return result;
  }, [search, selectedCategory, priceRange, sortBy]);

  return (
    <div className="directory-page">
      <div className="container">
        {/* Header */}
        <div className="directory-header">
          <h1>Find Your <span className="gradient-text">Perfect Mentor</span></h1>
          <p>Browse our curated network of {mentors.length}+ industry professionals.</p>
        </div>

        {/* Search & Filters */}
        <div className="directory-controls glass-card">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="input-field search-input"
              placeholder="Search by name, skill, company..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-row">
            <div className="filter-categories">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.icon}</span> {cat.label}
                </button>
              ))}
            </div>
            <div className="filter-selects">
              <select
                className="input-field filter-select"
                value={priceRange}
                onChange={e => setPriceRange(e.target.value)}
              >
                <option value="all">Any Price</option>
                <option value="0-100">Under $100/mo</option>
                <option value="100-150">$100 - $150/mo</option>
                <option value="150-200">$150 - $200/mo</option>
                <option value="200-999">$200+/mo</option>
              </select>
              <select
                className="input-field filter-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p><strong>{filteredMentors.length}</strong> mentors found</p>
        </div>

        {/* Mentor Grid */}
        <div className="directory-grid">
          {filteredMentors.map(mentor => (
            <Link to={`/mentor/${mentor.id}`} key={mentor.id} className="dir-mentor-card glass-card">
              <div className="dir-card-top">
                <img src={mentor.avatar} alt={mentor.name} className="avatar avatar-lg" />
                <div className="dir-card-info">
                  <h3>{mentor.name}</h3>
                  <p className="dir-role">{mentor.title}</p>
                  <p className="dir-company">at {mentor.company}</p>
                </div>
                <div className="dir-rating">
                  <span className="star">★</span> {mentor.rating}
                  <span className="review-count">({mentor.reviews})</span>
                </div>
              </div>
              <p className="dir-bio">{mentor.bio}</p>
              <div className="dir-skills">
                {mentor.skills.map(skill => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
              <div className="dir-card-bottom">
                <div className="dir-meta">
                  <span>⏱ {mentor.responseTime}</span>
                  <span>📅 {mentor.sessions} sessions</span>
                </div>
                <div className="dir-price-action">
                  <span className="dir-price">From <strong>${mentor.price}</strong>/mo</span>
                  <span className="btn btn-primary btn-sm">View Profile</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No mentors found</h3>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
