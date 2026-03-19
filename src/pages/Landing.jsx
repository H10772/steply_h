import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mentors, reviews, stats } from '../data/mockData';
import CompanyLogos from '../components/CompanyLogos';
import nightfallImg from '../assets/nightfall.webp';
import './Landing.css';

const typingPhrases = ['Growth', 'Leadership', 'Skills', 'Career'];

const suggestionChips = ['Product Managers', 'Career Coaches', 'Software Engineers', 'Leadership Mentors', 'UX Designers', 'Data Scientists', 'Startup Founders'];

export default function Landing() {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [oneoffVisible, setOneoffVisible] = useState(false);
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const logoTrackRef = useRef(null);
  const veteransRef = useRef(null);
  const veteransTrackRef = useRef(null);
  const oneoffRef = useRef(null);

  const featuredMentors = mentors.slice(0, 6);
  const exploreMentors = mentors.slice(0, 6);
  const allReviews = reviews.slice(0, 5);

  // Typing effect animation
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % typingPhrases.length;
      const fullWord = typingPhrases[i];

      setCurrentWord(
        isDeleting
          ? fullWord.substring(0, currentWord.length - 1)
          : fullWord.substring(0, currentWord.length + 1)
      );

      if (!isDeleting && currentWord === fullWord) {
        setTypingSpeed(2000); // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100); // Pause before typing new word
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  // Auto-scroll mentor carousel using scrollLeft to allow manual scrolling
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;
    let raf;
    const speed = 0.5;
    let isPaused = false;
    let lastInteract = 0;

    const handleInteract = () => {
      isPaused = true;
      lastInteract = Date.now();
    };

    track.addEventListener('touchstart', handleInteract, { passive: true });
    track.addEventListener('wheel', handleInteract, { passive: true });
    track.addEventListener('mousedown', handleInteract, { passive: true });

    const scroll = () => {
      if (!isPaused) {
        track.scrollLeft += speed;
        // The array is triplicated. Once we reach 1/3 of scrollWidth, reset to 0.
        // Wait until scrollWidth is populated
        if (track.scrollWidth > 0 && track.scrollLeft >= track.scrollWidth / 3) {
          track.scrollLeft = 0;
        }
      } else {
        if (Date.now() - lastInteract > 3000) {
          isPaused = false;
        }
      }
      raf = requestAnimationFrame(scroll);
    };
    raf = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener('touchstart', handleInteract);
      track.removeEventListener('wheel', handleInteract);
      track.removeEventListener('mousedown', handleInteract);
    };
  }, []);

  // Review carousel next/prev
  const nextReview = () => setReviewIndex(prev => (prev + 1) % allReviews.length);
  const prevReview = () => setReviewIndex(prev => (prev - 1 + allReviews.length) % allReviews.length);

  // Auto-scroll veterans cards when section is visible
  useEffect(() => {
    const section = veteransRef.current;
    const track = veteransTrackRef.current;
    if (!section || !track) return;
    let raf;
    const speed = 0.6;
    let isVisible = false;
    let isPaused = false;
    let lastInteract = 0;

    const handleInteract = () => {
      isPaused = true;
      lastInteract = Date.now();
    };

    track.addEventListener('touchstart', handleInteract, { passive: true });
    track.addEventListener('wheel', handleInteract, { passive: true });
    track.addEventListener('mousedown', handleInteract, { passive: true });

    const scroll = () => {
      if (!isVisible || isPaused) { 
        if (isPaused && Date.now() - lastInteract > 3000) {
          isPaused = false;
        }
        raf = requestAnimationFrame(scroll); 
        return; 
      }
      track.scrollLeft += speed;
      if (track.scrollWidth > 0 && track.scrollLeft >= track.scrollWidth / 3) {
        track.scrollLeft = 0;
      }
      raf = requestAnimationFrame(scroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.2 }
    );
    observer.observe(section);
    raf = requestAnimationFrame(scroll);

    // One-off section scroll-triggered animation
    const oneoffSection = oneoffRef.current;
    if (oneoffSection) {
      const oneoffObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setOneoffVisible(true); oneoffObserver.disconnect(); } },
        { threshold: 0.15 }
      );
      oneoffObserver.observe(oneoffSection);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      track.removeEventListener('touchstart', handleInteract);
      track.removeEventListener('wheel', handleInteract);
      track.removeEventListener('mousedown', handleInteract);
    };
  }, []);

  // Global scroll-reveal using IntersectionObserver
  useEffect(() => {
    const revealClasses = [
      'scroll-reveal', 'scroll-reveal-fade', 'scroll-reveal-left',
      'scroll-reveal-right', 'scroll-reveal-scale', 'scroll-reveal-glow'
    ];
    const selector = revealClasses.map(c => '.' + c + ':not(.revealed)').join(', ');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <div className="landing">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-noise"></div>
        <div className="container hero-content">
          <h1 className="hero-title" style={{ fontWeight: 400, fontStyle: 'normal' }}>
            1-on-1 Mentorship in<br />
            <span className="typing-text">{currentWord}<span className="cursor">|</span></span>
          </h1>
          <p className="hero-subtitle">
            Learn a new skill, launch a project, land your dream career.
          </p>

          <div className="hero-search-wrapper">
            <div className="hero-search-inner">

              <input type="text" placeholder="Search by company, skills or role" className="hero-search-input" />
              <button className="btn btn-primary btn-find-mentors" onClick={() => navigate('/mentors')}>Find mentors</button>
            </div>
          </div>

          <div className="hero-chips">
            {suggestionChips.map(chip => (
              <button key={chip} className="hero-chip" onClick={() => navigate('/mentors')}>
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENTOR CAROUSEL (Auto-scroll) ===== */}
      <section className="section mentor-carousel-section">
        <div className="mentor-carousel-track" ref={carouselRef}>
          {[...featuredMentors, ...featuredMentors, ...featuredMentors].map((mentor, i) => (
            <Link to={`/mentor/${mentor.id}`} key={i} className="carousel-card">
              <div className="carousel-card-img">
                <img src={mentor.avatar} alt={mentor.name} />
                <span className="carousel-rating">★ {mentor.rating}</span>
              </div>
              <h3 className="carousel-name">{mentor.name}</h3>
              <p className="carousel-role">{mentor.title} at {mentor.company}</p>
              <div className="carousel-skills">
                {mentor.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="carousel-skill-tag">{skill}</span>
                ))}
              </div>
              <Link to={`/mentor/${mentor.id}`} className="carousel-view-btn">View profile</Link>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== COMPANY LOGOS (Auto-scroll) ===== */}
      <section className="company-logos-section">
        <div className="logos-scroll-wrapper">
          <div className="logos-scroll-track">
            <CompanyLogos />
            <CompanyLogos aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ===== AT YOUR FINGERTIPS ===== */}
      <section className="section fingertips-section">
        <div className="container fingertips-grid">
          <div className="fingertips-content">
            <h2 className="section-title-serif scroll-reveal">At your fingertips: a dedicated career coach</h2>
            <p className="fingertips-desc scroll-reveal reveal-delay-1">
              Want to start a new dream career? Successfully build your startup? Itching to
              learn high-demand skills? Work smart with an online mentor by your side to offer
              expert advice and guidance to match your zeal. Become unstoppable using Steply.
            </p>
            <div className="fingertips-features scroll-reveal reveal-delay-2">
              <span>✓ Thousands of mentors available</span>
              <span>✓ Flexible program structures</span>
              <span>✓ Free trial</span>
              <span>✓ Personal chats</span>
              <span>✓ 1-on-1 calls</span>
              <span>✓ 97% satisfaction rate</span>
            </div>
            <Link to="/mentors" className="btn btn-primary scroll-reveal reveal-delay-3">Browse mentors</Link>
          </div>
          <div className="fingertips-visual scroll-reveal-right reveal-delay-2">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-search-bar">Search by company, skills or role</div>
                <div className="phone-btn">Find mentors</div>
                <div className="phone-mentor-card">
                  <img src={mentors[0].avatar} alt="" className="phone-mentor-img" />
                  <div>
                    <strong>{mentors[0].name}</strong>
                    <p>{mentors[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar-section">
        <div className="container">
          <div className="stats-bar glass-card scroll-reveal-scale">
            <div className="stat-block scroll-reveal reveal-delay-1">
              <span className="stat-number">{stats.mentors}</span>
              <span className="stat-desc">Available mentors</span>
            </div>
            <div className="stat-block scroll-reveal reveal-delay-2">
              <span className="stat-number">{stats.sessions}</span>
              <span className="stat-desc">Matches made</span>
            </div>
            <div className="stat-block scroll-reveal reveal-delay-3">
              <span className="stat-number">{stats.countries}</span>
              <span className="stat-desc">Countries represented</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="section testimonial-hero">
        <div className="container testimonial-hero-content">
          <div className="stars scroll-reveal-fade" style={{ justifyContent: 'center', fontSize: '1.5rem' }}>
            {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <blockquote className="testimonial-hero-quote scroll-reveal">
            "{allReviews[0].text}"
          </blockquote>
          <div className="testimonial-hero-author scroll-reveal reveal-delay-2">
            <img src={allReviews[0].avatar} alt="" className="avatar" />
            <div>
              <strong>{allReviews[0].userName}</strong>
              <p>Mentee</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LONG-TERM MENTORSHIP (Sticky Scroll) ===== */}
      <section className="longterm-section">
        <div className="container longterm-sticky-grid">
          <div className="longterm-sticky-left">
            <h2 className="section-title-serif scroll-reveal-left">Long-term mentorship isn't just better – it's faster</h2>
          </div>
          <div className="longterm-scroll-right">
            <div className="timeline-line"></div>
            <div className="timeline-card-wrap scroll-reveal-glow reveal-delay-1">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-visual discover-visual">
                  <h3 className="timeline-card-title">Discover</h3>
                  <div className="tc-mockup">
                    <img src={mentors[0].avatar} alt="" className="tc-avatar" />
                    <div className="tc-rating">★ 4.8</div>
                    <div className="tc-name">Arlene McCoy</div>
                  </div>
                </div>
                <p className="timeline-card-desc">Explore a curated network of vetted mentors – engineers, designers, founders, and more.</p>
              </div>
            </div>
            <div className="timeline-card-wrap scroll-reveal-glow reveal-delay-2">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-visual start-visual">
                  <h3 className="timeline-card-title">Start</h3>
                  <div className="tc-plans">
                    <div className="tc-plan-card tc-plan-b">Plan B</div>
                    <div className="tc-plan-card tc-plan-a">Plan A</div>
                    <div className="tc-plan-card tc-plan-c">Plan C</div>
                  </div>
                </div>
                <p className="timeline-card-desc">Choose a flexible plan that fits your pace – whether it's Q&A chats, regular calls, or something in between.</p>
              </div>
            </div>
            <div className="timeline-card-wrap scroll-reveal-glow reveal-delay-3">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-visual meet-visual">
                  <h3 className="timeline-card-title">Meet</h3>
                  <div className="tc-video-call">
                    <div className="tc-video-person">
                      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="22" stroke="var(--accent-primary)" strokeWidth="2" fill="rgba(42,157,143,0.15)" />
                        <circle cx="24" cy="18" r="7" fill="var(--accent-primary)" opacity="0.6" />
                        <path d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="var(--accent-primary)" opacity="0.4" />
                      </svg>
                    </div>
                    <div className="tc-call-controls">
                      <span className="tc-ctrl"></span>
                      <span className="tc-ctrl tc-ctrl-green"></span>
                      <span className="tc-ctrl tc-ctrl-blue"></span>
                    </div>
                  </div>
                </div>
                <p className="timeline-card-desc">Get ongoing support through regular calls, check-ins, and feedback.</p>
              </div>
            </div>
            <div className="timeline-card-wrap scroll-reveal-glow reveal-delay-4">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-visual grow-visual">
                  <h3 className="timeline-card-title">Grow</h3>
                  <div className="tc-growth">
                    <div className="tc-checklist">
                      <div className="tc-check-item">✓ Goals reviewed</div>
                      <div className="tc-check-item">✓ Skills upgraded</div>
                      <div className="tc-check-item">✓ Career advanced</div>
                    </div>
                    <div className="tc-chart-bars">
                      <div className="tc-bar" style={{ height: '40%' }}></div>
                      <div className="tc-bar" style={{ height: '60%' }}></div>
                      <div className="tc-bar" style={{ height: '85%' }}></div>
                      <div className="tc-bar" style={{ height: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="timeline-card-desc">Mentees who stick with their mentor for 3+ months reach their goals 2x faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLORE MENTORS (Cream BG) ===== */}
      <section className="section explore-section">
        <div className="container">
          <h2 className="section-title-serif scroll-reveal" style={{ color: 'var(--text-dark)', textAlign: 'center' }}>
            Explore {stats.mentors} available mentors
          </h2>
          <div className="explore-search-bar">
            <input type="text" placeholder="Search by company, skills or role" className="explore-search-input" />
            <button className="explore-search-btn" onClick={() => navigate('/mentors')}>Find mentors</button>
          </div>
          <div className="explore-grid">
            {exploreMentors.map(mentor => (
              <Link to={`/mentor/${mentor.id}`} key={mentor.id} className="explore-card">
                <div className="explore-card-img">
                  <img src={mentor.avatar} alt={mentor.name} />
                  <span className="carousel-rating">★ {mentor.rating}</span>
                </div>
                <h3>{mentor.name}</h3>
                <p className="explore-role">{mentor.title} at {mentor.company}</p>
                <div className="explore-skills">
                  {mentor.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="explore-skill-tag">{skill}</span>
                  ))}
                </div>
                <span className="explore-view-btn">View profile</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/mentors" className="btn btn-secondary" style={{ borderColor: 'var(--text-dark)', color: 'var(--text-dark)' }}>
              Explore all mentors
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL 1 (Cream BG) ===== */}
      <section className="section testimonial-cream">
        <div className="container testimonial-cream-content">
          <div className="stars-gold scroll-reveal-fade">★★★★★</div>
          <blockquote className="testimonial-cream-quote scroll-reveal-left">
            "After years of self-studying with books and courses, I finally joined Steply. After a few sessions, my feelings changed completely. I can clearly see my progress – 100% value for money."
          </blockquote>
          <div className="testimonial-cream-author">
            <img src={reviews[0].avatar} alt="" className="avatar" />
            <div>
              <strong>{reviews[0].userName}</strong>
              <p>Data Scientist at Printify</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NO STRINGS ATTACHED (Banner with nightfall image) ===== */}
      <section className="section free-trial-section">
        <div className="container">
          <div className="free-trial-banner">
            <div className="free-trial-left">
              <h2 className="free-trial-title">No strings attached, free trial, fully vetted.</h2>
              <p className="free-trial-desc">Try your first call for free with every mentor you're meeting. Cancel anytime, no questions asked.</p>
              <Link to="/mentors" className="btn btn-primary">Browse mentors</Link>
            </div>
            <div className="free-trial-right">
              <img src={nightfallImg} alt="Mentoring session" className="free-trial-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL 2 (Dark BG) ===== */}
      <section className="section testimonial-dark">
        <div className="container testimonial-dark-content">
          <div className="stars-gold scroll-reveal-fade">★★★★★</div>
          <blockquote className="testimonial-dark-quote scroll-reveal-right">
            "My mentor gave me great tips on how to make my resume and portfolio better and he had great job recommendations during my career change. He assured me many times that there were still a lot of transferable skills that employers would really love."
          </blockquote>
          <div className="testimonial-dark-author">
            <img src={reviews[1].avatar} alt="" className="avatar" />
            <div>
              <strong>{reviews[1].userName}</strong>
              <p>Data Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY VETERANS + Auto-Scrolling Mentor Pricing Cards ===== */}
      <section className="section veterans-section" ref={veteransRef}>
        <div className="container veterans-content">
          <h2 className="section-title-serif scroll-reveal" style={{ textAlign: 'center' }}>
            An arsenal of industry veterans and mentoring packages at a flexible price.
          </h2>
          <p className="veterans-desc">
            Pick from a curated collection of mentors and services. Try them out with no obligation. Found your mentoring sessions useful? Move to a low-cost, monthly mentoring subscription. No lock-ins, no hidden fees – just accelerated professional growth.
          </p>
        </div>
        {/* Auto-scrolling pricing mentor cards */}
        <div className="veterans-cards-wrapper">
          <div className="veterans-cards-track" ref={veteransTrackRef}>
            {[...mentors.slice(0, 6), ...mentors.slice(0, 6), ...mentors.slice(0, 6)].map((mentor, i) => (
              <div key={i} className="veteran-card">
                <div className="veteran-card-top">
                  <img src={mentor.avatar} alt={mentor.name} className="veteran-avatar" />
                  <span className="carousel-rating">★ {mentor.rating}</span>
                  <div className="veteran-info">
                    <strong>{mentor.name}</strong>
                    <p>{mentor.title} at {mentor.company}</p>
                  </div>
                  <div className="veteran-skills">
                    {mentor.skills.slice(0, 3).map(s => <span key={s} className="explore-skill-tag">{s}</span>)}
                  </div>
                </div>
                <div className="veteran-card-bottom">
                  <div className="veteran-price">
                    <span>Starting from</span>
                    <strong>${[160, 120, 140, 180, 100, 200][i % 6]}<span className="price-period">/month</span></strong>
                  </div>
                  <Link to={`/mentor/${mentor.id}`} className="veteran-view-btn">View profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION (Free Trial / No Strings / Fully Vetted) ===== */}
      <section className="section features-trio-section">
        <div className="container">
          <div className="features-trio-card scroll-reveal-scale">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="16" stroke="var(--bg-cream)" strokeWidth="1.5" opacity="0.5" />
                  <path d="M12 18l4 4 8-8" stroke="var(--bg-cream)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="feature-title">Free Trial</h3>
              <p className="feature-desc">Get a free trial with every mentor</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 8C14 8 10 12 10 18s4 10 8 10 8-4 8-10-4-10-8-10z" stroke="var(--bg-cream)" strokeWidth="1.5" opacity="0.5" />
                  <path d="M14 14l8 8M22 14l-8 8" stroke="var(--bg-cream)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="feature-title">No Strings</h3>
              <p className="feature-desc">Cancelling is simple and can be done anytime</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="10" y="10" width="16" height="16" rx="3" stroke="var(--bg-cream)" strokeWidth="1.5" opacity="0.5" />
                  <text x="18" y="22" textAnchor="middle" fill="var(--bg-cream)" fontSize="10" fontWeight="bold">HQ</text>
                </svg>
              </div>
              <h3 className="feature-title">Fully Vetted</h3>
              <p className="feature-desc">We demand the highest quality service from our mentors</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/mentors" className="btn btn-primary">Find my mentor</Link>
            <div className="become-mentor-link">
              <Link to="/auth">Become a mentor →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ONE-OFF SESSIONS (Cream BG) with WOW animations ===== */}
      <section className="section oneoff-section" ref={oneoffRef}>
        <div className="container">
          <h2 className="section-title-serif scroll-reveal" style={{ color: 'var(--text-dark)', textAlign: 'center' }}>
            Not sure if mentorship is right for you?<br />Give it a try with a one-off session.
          </h2>
          <p className="oneoff-subtitle">
            A quick, easy call with an expert is just one click away with our attractive one-off sessions. Picking a brain, talking through an issue or getting to know an industry expert has never been easier.
          </p>
          <div className="oneoff-grid">
            <div className={`oneoff-card oneoff-animated ${oneoffVisible ? 'oneoff-visible' : ''}`} style={{ animationDelay: '0s' }}>
              <div className="oneoff-card-glow"></div>
              <h3>Introductory Call</h3>
              <p>If you're looking for a mentor, and you're just not sure about how this all works – this should be for you. In a casual, informal introductory call, a mentor will introduce themselves ...</p>
              <div className="oneoff-price"><span>Starting from</span><strong>$39<span className="price-unit">/call</span></strong></div>
              <Link to="/mentors" className="oneoff-explore-btn">Explore</Link>
            </div>
            <div className={`oneoff-card oneoff-animated ${oneoffVisible ? 'oneoff-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
              <div className="oneoff-card-glow"></div>
              <h3>Study Plan</h3>
              <p>Looking to learn a new skill? The vast amount of resources on any topic on the internet can feel overwhelming at times. A mentor can give you an overview of worthwhile ...</p>
              <div className="oneoff-price"><span>Starting from</span><strong>$119<span className="price-unit">/call</span></strong></div>
              <Link to="/mentors" className="oneoff-explore-btn">Explore</Link>
            </div>
            <div className={`oneoff-card oneoff-animated ${oneoffVisible ? 'oneoff-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="oneoff-card-glow"></div>
              <h3>Interview Preparation</h3>
              <p>Some big interviews coming up? In this 1-hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions ...</p>
              <div className="oneoff-price"><span>Starting from</span><strong>$149<span className="price-unit">/call</span></strong></div>
              <Link to="/mentors" className="oneoff-explore-btn">Explore</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/mentors" className="btn btn-secondary" style={{ borderColor: 'var(--text-dark)', color: 'var(--text-dark)' }}>
              Show me more
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STILL NOT CONVINCED + Review Carousel (Cream BG) ===== */}
      <section className="section convinced-section">
        <div className="container convinced-grid">
          <div className="convinced-left">
            <h2 className="section-title-serif scroll-reveal-left" style={{ color: 'var(--text-dark)' }}>Still not convinced? Don't just take our word for it</h2>
            <p className="scroll-reveal reveal-delay-1" style={{ color: 'var(--text-cream)', marginBottom: 'var(--space-xl)', lineHeight: '1.8' }}>
              We've already delivered 1-on-1 mentorship to thousands of students, professionals, managers and executives. Even better, they've left an average rating of 4.9 out of 5 for our mentors.
            </p>
            <Link to="/mentors" className="btn btn-secondary" style={{ borderColor: 'var(--text-dark)', color: 'var(--text-dark)' }}>
              Find a mentor
            </Link>
          </div>
          <div className="convinced-right scroll-reveal-right reveal-delay-2">
            <div className="review-carousel-container">
              <div className="review-carousel-track" style={{ transform: `translateX(-${reviewIndex * 100}%)` }}>
                {allReviews.map((review, i) => {
                  const names = ['Farzad', 'Rao', 'Miriam', 'Daniel', 'Sofia'];
                  const roles = ['Leadership Mentee', 'Engineering Mentee', 'Data Science Mentee', 'Product Mentee', 'Design Mentee'];
                  const mentorNames = ['Naz', 'Brandon', 'Sara', 'Ahmed', 'Liam'];
                  return (
                    <div key={i} className="review-carousel-card">
                      <div className="review-carousel-header">
                        <img src={review.avatar} alt="" className="avatar" />
                        <div>
                          <div className="review-carousel-name">{names[i]}</div>
                          <div className="review-carousel-role">{roles[i]}</div>
                        </div>
                      </div>
                      <p className="review-carousel-text">
                        "<strong>{mentorNames[i]}</strong> {review.text}"
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="review-carousel-controls">
              <div className="review-arrows">
                <button className="review-arrow" onClick={prevReview} aria-label="Previous">‹</button>
                <button className="review-arrow" onClick={nextReview} aria-label="Next">›</button>
              </div>
              <div className="review-dots">
                {allReviews.map((_, i) => (
                  <span key={i} className={`review-dot ${i === reviewIndex ? 'active' : ''}`} onClick={() => setReviewIndex(i)}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
