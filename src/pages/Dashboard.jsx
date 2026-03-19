import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sessions, messages } from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const upcomingSessions = sessions.filter(s => s.status === 'upcoming');
  const completedSessions = sessions.filter(s => s.status === 'completed');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'sessions', label: 'Sessions', icon: '📅' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'progress', label: 'Progress', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar glass-card">
          <div className="sidebar-user">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" className="avatar avatar-lg" />
            <div>
              <h3>Alex Johnson</h3>
              <p className="user-role">Mentee</p>
            </div>
          </div>
          <nav className="sidebar-nav">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <Link to="/mentors" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Find a Mentor
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="dashboard-main">
          {/* Header */}
          <div className="dashboard-header">
            <div>
              <h1>Welcome back, <span className="gradient-text">Alex</span> 👋</h1>
              <p>Here's what's happening with your mentorship journey.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="dash-stats-grid">
            <div className="dash-stat-card glass-card">
              <div className="dash-stat-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>📅</div>
              <div>
                <p className="dash-stat-value">{upcomingSessions.length}</p>
                <p className="dash-stat-label">Upcoming Sessions</p>
              </div>
            </div>
            <div className="dash-stat-card glass-card">
              <div className="dash-stat-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>✅</div>
              <div>
                <p className="dash-stat-value">{completedSessions.length}</p>
                <p className="dash-stat-label">Completed</p>
              </div>
            </div>
            <div className="dash-stat-card glass-card">
              <div className="dash-stat-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}>💬</div>
              <div>
                <p className="dash-stat-value">{messages.filter(m => m.unread).length}</p>
                <p className="dash-stat-label">Unread Messages</p>
              </div>
            </div>
            <div className="dash-stat-card glass-card">
              <div className="dash-stat-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>🔥</div>
              <div>
                <p className="dash-stat-value">12</p>
                <p className="dash-stat-label">Day Streak</p>
              </div>
            </div>
          </div>

          <div className="dash-content-grid">
            {/* Upcoming Sessions */}
            <section className="dash-section glass-card">
              <div className="dash-section-header">
                <h2>Upcoming Sessions</h2>
                <Link to="/booking/1" className="btn btn-ghost btn-sm">Book New →</Link>
              </div>
              <div className="session-list">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="session-item">
                    <img src={session.mentorAvatar} alt={session.mentorName} className="avatar" />
                    <div className="session-info">
                      <h4>{session.topic}</h4>
                      <p>with {session.mentorName}</p>
                    </div>
                    <div className="session-time">
                      <span className="session-date">{session.date}</span>
                      <span className="session-hour">{session.time} · {session.duration}</span>
                    </div>
                    <span className={`session-badge ${session.status}`}>{session.type}</span>
                  </div>
                ))}
                {upcomingSessions.length === 0 && (
                  <p className="empty-text">No upcoming sessions. Book one now!</p>
                )}
              </div>
            </section>

            {/* Messages */}
            <section className="dash-section glass-card">
              <div className="dash-section-header">
                <h2>Messages</h2>
                <button className="btn btn-ghost btn-sm">View All →</button>
              </div>
              <div className="message-list">
                {messages.map(msg => (
                  <div key={msg.id} className={`message-item ${msg.unread ? 'unread' : ''}`}>
                    <img src={msg.mentorAvatar} alt={msg.mentorName} className="avatar" />
                    <div className="message-content">
                      <div className="message-top">
                        <strong>{msg.mentorName}</strong>
                        <span className="message-time">{msg.timestamp}</span>
                      </div>
                      <p className="message-preview">{msg.lastMessage}</p>
                    </div>
                    {msg.unread && <div className="unread-dot"></div>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Progress Section */}
          <section className="dash-section glass-card" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="dash-section-header">
              <h2>Your Progress</h2>
            </div>
            <div className="progress-grid">
              <div className="progress-item">
                <div className="progress-header-row">
                  <span>System Design</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header-row">
                  <span>React Advanced</span>
                  <span>60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%', background: 'var(--accent-secondary)' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header-row">
                  <span>Interview Prep</span>
                  <span>40%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%', background: 'var(--success)' }}></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
