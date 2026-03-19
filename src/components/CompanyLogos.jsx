import './CompanyLogos.css';

export default function CompanyLogos() {
  return (
    <div className="logos-row">
      {/* Airbnb */}
      <div className="brand-logo">
        <svg viewBox="0 0 120 38" fill="currentColor" className="brand-svg">
          <path d="M25.5 28.3c-.6 1-1.4 1.8-2.3 2.3-.9.5-1.9.8-3 .8-1.5 0-2.7-.5-3.7-1.4-1-.9-1.5-2.2-1.5-3.7 0-1.2.3-2.2.9-3s1.4-1.5 2.4-2.1c-1.3-1.5-1.9-2.8-1.9-4 0-1.2.4-2.2 1.3-3 .8-.8 1.9-1.2 3.1-1.2 1.1 0 2 .3 2.8 1 .7.7 1.1 1.5 1.1 2.6 0 1.7-1.1 3.2-3.4 4.5l2.8 3.3c.5-.9.8-2 1-3.2h2.4c-.3 1.8-.9 3.4-1.8 4.7l3 3.5h-3l-1.2-1.1zm-4-1.6c.7.6 1.5.9 2.4.9.7 0 1.2-.2 1.7-.5s.8-.8 1.1-1.3l-3.4-4c-.7.4-1.2.8-1.5 1.3s-.5 1.1-.5 1.7c0 .7.1 1.3.2 1.9zm.2-9.3c0 .8.5 1.7 1.4 2.9 1.5-.9 2.3-1.9 2.3-3.1 0-.6-.2-1-.5-1.4-.4-.4-.8-.5-1.4-.5-.6 0-1 .2-1.4.5-.3.5-.4.9-.4 1.6z"/>
          <text x="36" y="26" fontSize="16" fontWeight="700" fontFamily="Cereal, sans-serif">airbnb</text>
        </svg>
      </div>

      {/* Amazon */}
      <div className="brand-logo">
        <svg viewBox="0 0 120 38" fill="currentColor" className="brand-svg amazon">
          <text x="0" y="28" fontSize="20" fontWeight="800" fontFamily="'Amazon Ember', Arial, sans-serif" letterSpacing="-0.5">amazon</text>
        </svg>
      </div>

      {/* Meta */}
      <div className="brand-logo">
        <svg viewBox="0 0 120 38" fill="currentColor" className="brand-svg meta">
          <text x="28" y="28" fontSize="20" fontWeight="400" fontFamily="'Optimistic Display', system-ui, sans-serif">Meta</text>
          <path d="M8 28c-2-4-3.5-8.5-3.5-12 0-2.5.6-4.3 1.7-5.4.9-.9 2-1.3 3.2-1.3 1.5 0 2.8.8 4.2 2.8l1.2 1.8 1.2-1.8c1.4-2 2.7-2.8 4.2-2.8 1.2 0 2.3.4 3.2 1.3 1.1 1.1 1.7 2.9 1.7 5.4 0 3.5-1.5 8-3.5 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Microsoft */}
      <div className="brand-logo">
        <svg viewBox="0 0 140 38" fill="currentColor" className="brand-svg microsoft">
          <rect x="0" y="8" width="10" height="10" fill="#f25022" rx="1"/>
          <rect x="12" y="8" width="10" height="10" fill="#7fba00" rx="1"/>
          <rect x="0" y="20" width="10" height="10" fill="#00a4ef" rx="1"/>
          <rect x="12" y="20" width="10" height="10" fill="#ffb900" rx="1"/>
          <text x="28" y="26" fontSize="15" fontWeight="400" fontFamily="'Segoe UI', system-ui, sans-serif" fill="currentColor">Microsoft</text>
        </svg>
      </div>

      {/* Spotify */}
      <div className="brand-logo">
        <svg viewBox="0 0 120 38" fill="currentColor" className="brand-svg spotify">
          <circle cx="14" cy="19" r="13" fill="#1DB954" opacity="0.9"/>
          <path d="M9 24c4-2 9-2.5 14-1.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M8 20c5-2.5 11-3 16-1.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M7 16c5.5-2.5 13-3 18-1" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <text x="32" y="25" fontSize="16" fontWeight="700" fontFamily="'Circular', system-ui, sans-serif">Spotify</text>
        </svg>
      </div>

      {/* Uber */}
      <div className="brand-logo">
        <svg viewBox="0 0 80 38" fill="currentColor" className="brand-svg uber">
          <text x="0" y="28" fontSize="22" fontWeight="700" fontFamily="'UberMove', 'UberMoveText', system-ui, sans-serif">Uber</text>
        </svg>
      </div>
    </div>
  );
}
