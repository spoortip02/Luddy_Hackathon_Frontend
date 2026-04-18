import React from "react";
import { Link } from "react-router-dom";

function DashboardPage({ role }) {
  const topThree = [
    { rank: 2, team: "Abram Mango", score: 422 },
    { rank: 1, team: "Kianna Torff", score: 432 },
    { rank: 3, team: "Alfonso Lubin", score: 408 },
  ];

  const updates = [
    "Judge 3 scored Bug Smashers: 95",
    "Judge 1 scored Code Crusaders: 90",
    "Judge 2 scored Pixel Pioneers: 87",
  ];

  const leaderboard = [
    { rank: 1, team: "Bug Smashers", total: 432, avg: 108.0, status: "Complete" },
    { rank: 2, team: "Code Crusaders", total: 422, avg: 108.0, status: "Complete" },
    { rank: 3, team: "Pixel Pioneers", total: 408, avg: 108.3, status: "Complete" },
    { rank: 4, team: "Logic Lords", total: 396, avg: 107.9, status: "Complete" },
    { rank: 5, team: "Red Devs", total: 396, avg: 106.1, status: "Complete" },
  ];

  return (
    <div className="app">
      <header className="topbar">
  <div className="logo-title">
    <Link to="/" className="logo-link">
      <div className="iu-badge">IU</div>
    </Link>

    <h1>Luddy Hackathon Leaderboard</h1>
  </div>

  <div className="nav-right">
    <span>Teams: 25</span>
    <span>Judges: 4</span>
    <span>Updated: Just now</span>

    {role === "judge" && (
      <Link to="/enter-score" className="nav-btn">
        Enter Score
      </Link>
    )}
  </div>
</header>

      <section className="hero-section">
        <div className="podium-section">
          {topThree.map((item) => (
            <div key={item.rank} className={`podium-card rank-${item.rank}`}>
              <div className="avatar-placeholder">{item.rank}</div>
              <h3>{item.team}</h3>
              <div className="score-box">{item.score} pts</div>
            </div>
          ))}
        </div>

        <div className="side-panel">
          <div className="updates-card">
            <h2>Recent Updates</h2>
            {updates.map((update, index) => (
              <p key={index}>{update}</p>
            ))}
          </div>

          <div className="stats-card">
            <div>
              <h3>Mean</h3>
              <p>389.4</p>
            </div>
            <div>
              <h3>Median</h3>
              <p>415.0</p>
            </div>
            <div>
              <h3>Std.</h3>
              <p>30.8</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leaderboard-section">
        <h2>Top Teams</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Total Score</th>
              <th>Average Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((team) => (
              <tr key={team.rank}>
                <td>{team.rank}</td>
                <td>{team.team}</td>
                <td>{team.total}</td>
                <td>{team.avg}</td>
                <td>{team.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DashboardPage;