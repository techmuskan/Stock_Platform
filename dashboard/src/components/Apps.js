import React, { useMemo, useState } from "react";

const Apps = () => {
  const apps = useMemo(
    () => [
      {
        id: "pulse",
        name: "Pulse",
        category: "Market news",
        description: "Real-time market news and insights tailored for you.",
        status: "Connected",
      },
      {
        id: "coin",
        name: "Coin",
        category: "Mutual funds",
        description: "Invest in direct mutual funds with zero commission.",
        status: "Available",
      },
      {
        id: "console",
        name: "Console",
        category: "Reports",
        description: "Detailed reports on your holdings and transactions.",
        status: "Available",
      },
      {
        id: "varsity",
        name: "Varsity",
        category: "Learn",
        description: "Learn trading with structured modules and quizzes.",
        status: "Available",
      },
      {
        id: "streak",
        name: "Streak",
        category: "Strategy",
        description: "Create and test strategies without coding.",
        status: "Beta",
      },
      {
        id: "kite-connect",
        name: "Kite Connect",
        category: "API",
        description: "Build your own trading tools with robust APIs.",
        status: "Available",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(apps[0].id);
  const selected = apps.find((app) => app.id === selectedId) || apps[0];

  return (
    <div className="apps-page">
      <div className="apps-header">
        <div>
          <h2>Apps & integrations</h2>
          <p>Discover tools that make your trading workflow faster.</p>
        </div>
        <button className="apps-primary">Explore all</button>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <button
            key={app.id}
            className={`apps-card ${
              selectedId === app.id ? "apps-card-active" : ""
            }`}
            onClick={() => setSelectedId(app.id)}
            type="button"
          >
            <div className="apps-card-title">{app.name}</div>
            <div className="apps-card-meta">{app.category}</div>
            <p>{app.description}</p>
            <span className="apps-pill">{app.status}</span>
          </button>
        ))}
      </div>

      <div className="apps-detail">
        <div>
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
        </div>
        <div className="apps-detail-actions">
          <button className="apps-secondary">View details</button>
          <button className="apps-primary">Open {selected.name}</button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
