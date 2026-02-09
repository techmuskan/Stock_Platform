import React, { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MARKET_SEED = [
  { symbol: "AAPL", name: "Apple", price: 188.32 },
  { symbol: "MSFT", name: "Microsoft", price: 408.15 },
  { symbol: "NVDA", name: "NVIDIA", price: 731.44 },
  { symbol: "AMZN", name: "Amazon", price: 171.92 },
  { symbol: "TSLA", name: "Tesla", price: 214.18 },
  { symbol: "GOOGL", name: "Alphabet", price: 152.57 },
  { symbol: "META", name: "Meta", price: 487.62 },
  { symbol: "NFLX", name: "Netflix", price: 611.28 },
];

const STORAGE_KEYS = {
  watchlist: "stock_platform_watchlist",
  alerts: "stock_platform_alerts",
  portfolio: "stock_platform_portfolio",
};

const formatCurrency = (value) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatPercent = (value) => `${value.toFixed(2)}%`;

const getStored = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
};

const MarketLab = () => {
  const [market, setMarket] = useState(
    MARKET_SEED.map((item) => ({ ...item, change: 0, changePct: 0 }))
  );
  const [watchlist, setWatchlist] = useState(() =>
    getStored(STORAGE_KEYS.watchlist, ["AAPL", "NVDA"])
  );
  const [alerts, setAlerts] = useState(() =>
    getStored(STORAGE_KEYS.alerts, [])
  );
  const [portfolio, setPortfolio] = useState(() =>
    getStored(STORAGE_KEYS.portfolio, {
      cash: 100000,
      positions: {},
      trades: [],
    })
  );
  const [tradeForm, setTradeForm] = useState({
    side: "buy",
    symbol: "AAPL",
    quantity: 1,
  });
  const [alertForm, setAlertForm] = useState({
    symbol: "AAPL",
    condition: "above",
    target: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarket((prev) =>
        prev.map((item) => {
          const drift = (Math.random() - 0.5) * 0.8;
          const nextPrice = Math.max(1, item.price * (1 + drift / 100));
          const change = nextPrice - item.price;
          return {
            ...item,
            price: Number(nextPrice.toFixed(2)),
            change: Number(change.toFixed(2)),
            changePct: Number(((change / item.price) * 100).toFixed(2)),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.watchlist, JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.alerts, JSON.stringify(alerts));
  }, [alerts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.portfolio, JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    if (!alerts.length) return;

    setAlerts((prev) =>
      prev.map((alert) => {
        if (alert.triggered) return alert;
        const latest = market.find((item) => item.symbol === alert.symbol);
        if (!latest) return alert;
        const hit =
          alert.condition === "above"
            ? latest.price >= alert.target
            : latest.price <= alert.target;
        if (!hit) return alert;

        toast.success(
          `${alert.symbol} hit ${formatCurrency(latest.price)} (${alert.condition} ${formatCurrency(
            alert.target
          )})`
        );
        return { ...alert, triggered: true };
      })
    );
  }, [market, alerts.length]);

  const marketMap = useMemo(() => {
    return market.reduce((acc, item) => {
      acc[item.symbol] = item;
      return acc;
    }, {});
  }, [market]);

  const holdings = useMemo(() => {
    const entries = Object.entries(portfolio.positions);
    return entries.map(([symbol, position]) => {
      const latest = marketMap[symbol];
      const current = latest ? latest.price : position.avgCost;
      const marketValue = current * position.quantity;
      const cost = position.avgCost * position.quantity;
      const pnl = marketValue - cost;
      return {
        symbol,
        quantity: position.quantity,
        avgCost: position.avgCost,
        price: current,
        marketValue,
        pnl,
      };
    });
  }, [portfolio.positions, marketMap]);

  const totals = useMemo(() => {
    const holdingsValue = holdings.reduce((sum, item) => sum + item.marketValue, 0);
    const pnl = holdings.reduce((sum, item) => sum + item.pnl, 0);
    const totalValue = portfolio.cash + holdingsValue;
    return { holdingsValue, pnl, totalValue };
  }, [holdings, portfolio.cash]);

  const handleAddWatch = (symbol) => {
    if (watchlist.includes(symbol)) return;
    setWatchlist((prev) => [...prev, symbol]);
  };

  const handleRemoveWatch = (symbol) => {
    setWatchlist((prev) => prev.filter((item) => item !== symbol));
  };

  const handleTrade = (event) => {
    event.preventDefault();
    const symbol = tradeForm.symbol;
    const quantity = Number(tradeForm.quantity);
    const latest = marketMap[symbol];

    if (!latest) {
      toast.error("Symbol not available.");
      return;
    }
    if (!quantity || quantity <= 0) {
      toast.error("Enter a valid quantity.");
      return;
    }

    const price = latest.price;
    const total = price * quantity;
    setPortfolio((prev) => {
      const positions = { ...prev.positions };
      const current = positions[symbol] || { quantity: 0, avgCost: 0 };

      if (tradeForm.side === "buy") {
        if (prev.cash < total) {
          toast.error("Insufficient cash balance.");
          return prev;
        }
        const newQty = current.quantity + quantity;
        const newCost =
          (current.quantity * current.avgCost + total) / newQty;
        positions[symbol] = { quantity: newQty, avgCost: Number(newCost.toFixed(2)) };
        return {
          ...prev,
          cash: Number((prev.cash - total).toFixed(2)),
          positions,
          trades: [
            {
              id: Date.now(),
              side: "BUY",
              symbol,
              quantity,
              price,
              total: Number(total.toFixed(2)),
              timestamp: new Date().toISOString(),
            },
            ...prev.trades,
          ],
        };
      }

      if (current.quantity < quantity) {
        toast.error("Not enough shares to sell.");
        return prev;
      }

      const newQty = current.quantity - quantity;
      if (newQty === 0) {
        delete positions[symbol];
      } else {
        positions[symbol] = { ...current, quantity: newQty };
      }

      return {
        ...prev,
        cash: Number((prev.cash + total).toFixed(2)),
        positions,
        trades: [
          {
            id: Date.now(),
            side: "SELL",
            symbol,
            quantity,
            price,
            total: Number(total.toFixed(2)),
            pnl: Number(((price - current.avgCost) * quantity).toFixed(2)),
            timestamp: new Date().toISOString(),
          },
          ...prev.trades,
        ],
      };
    });
  };

  const handleAlertSubmit = (event) => {
    event.preventDefault();
    const target = Number(alertForm.target);
    if (!target || target <= 0) {
      toast.error("Enter a valid alert price.");
      return;
    }
    setAlerts((prev) => [
      {
        id: Date.now(),
        symbol: alertForm.symbol,
        condition: alertForm.condition,
        target,
        createdAt: new Date().toISOString(),
        triggered: false,
      },
      ...prev,
    ]);
    setAlertForm((prev) => ({ ...prev, target: "" }));
  };

  return (
    <div className="market-lab">
      <ToastContainer position="top-right" autoClose={3500} theme="light" />
      <section className="market-hero">
        <div className="container">
          <span className="market-kicker">Market Lab</span>
          <h1>Turn the static pages into a live trading sandbox.</h1>
          <p>
            Simulate trades, track a watchlist, and create price alerts without
            leaving the browser. Data refreshes every 2 seconds for a
            fast-paced feel.
          </p>
          <div className="market-hero-actions">
            <button className="btn btn-primary">Start Paper Trading</button>
            <button className="btn btn-outline-primary">View API Docs</button>
          </div>
        </div>
      </section>

      <section className="container market-section">
        <div className="market-grid">
          <div className="market-panel">
            <div className="panel-head">
              <h2>Market Overview</h2>
              <span className="panel-sub">Live demo data</span>
            </div>
            <div className="market-cards">
              {market.map((item) => (
                <div key={item.symbol} className="market-card">
                  <div>
                    <h3>{item.symbol}</h3>
                    <p>{item.name}</p>
                  </div>
                  <div className="market-price">
                    <span>{formatCurrency(item.price)}</span>
                    <span
                      className={
                        item.change >= 0 ? "market-up" : "market-down"
                      }
                    >
                      {item.change >= 0 ? "+" : ""}
                      {item.change} ({formatPercent(item.changePct)})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="market-panel">
            <div className="panel-head">
              <h2>Watchlist</h2>
              <span className="panel-sub">
                Track your favorite symbols
              </span>
            </div>
            <div className="watchlist-control">
              <select
                value=""
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected) handleAddWatch(selected);
                }}
              >
                <option value="">Add symbol</option>
                {market
                  .filter((item) => !watchlist.includes(item.symbol))
                  .map((item) => (
                    <option key={item.symbol} value={item.symbol}>
                      {item.symbol} - {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="watchlist-items">
              {watchlist.length === 0 && (
                <p className="text-muted">No symbols yet. Add one above.</p>
              )}
              {watchlist.map((symbol) => {
                const item = marketMap[symbol];
                if (!item) return null;
                return (
                  <div key={symbol} className="watchlist-item">
                    <div>
                      <strong>{symbol}</strong>
                      <span>{item.name}</span>
                    </div>
                    <div>
                      <span>{formatCurrency(item.price)}</span>
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleRemoveWatch(symbol)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="market-panel">
            <div className="panel-head">
              <h2>Paper Trading</h2>
              <span className="panel-sub">Instant fills, zero fees</span>
            </div>
            <div className="portfolio-summary">
              <div>
                <p>Cash balance</p>
                <h3>{formatCurrency(portfolio.cash)}</h3>
              </div>
              <div>
                <p>Total value</p>
                <h3>{formatCurrency(totals.totalValue)}</h3>
              </div>
              <div>
                <p>Unrealized P/L</p>
                <h3 className={totals.pnl >= 0 ? "market-up" : "market-down"}>
                  {formatCurrency(totals.pnl)}
                </h3>
              </div>
            </div>
            <form className="trade-form" onSubmit={handleTrade}>
              <select
                value={tradeForm.side}
                onChange={(event) =>
                  setTradeForm((prev) => ({
                    ...prev,
                    side: event.target.value,
                  }))
                }
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
              <select
                value={tradeForm.symbol}
                onChange={(event) =>
                  setTradeForm((prev) => ({
                    ...prev,
                    symbol: event.target.value,
                  }))
                }
              >
                {market.map((item) => (
                  <option key={item.symbol} value={item.symbol}>
                    {item.symbol}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={tradeForm.quantity}
                onChange={(event) =>
                  setTradeForm((prev) => ({
                    ...prev,
                    quantity: event.target.value,
                  }))
                }
              />
              <button className="btn btn-primary" type="submit">
                Place Order
              </button>
            </form>
            <div className="holdings">
              {holdings.length === 0 && (
                <p className="text-muted">No holdings yet.</p>
              )}
              {holdings.map((item) => (
                <div key={item.symbol} className="holding-row">
                  <div>
                    <strong>{item.symbol}</strong>
                    <span>
                      {item.quantity} shares @ {formatCurrency(item.avgCost)}
                    </span>
                  </div>
                  <div>
                    <span>{formatCurrency(item.marketValue)}</span>
                    <span
                      className={item.pnl >= 0 ? "market-up" : "market-down"}
                    >
                      {formatCurrency(item.pnl)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="trade-log">
              <h4>Recent Trades</h4>
              {portfolio.trades.length === 0 && (
                <p className="text-muted">No trades yet.</p>
              )}
              {portfolio.trades.slice(0, 4).map((trade) => (
                <div key={trade.id} className="trade-row">
                  <div>
                    <strong>{trade.side}</strong> {trade.symbol}
                    <span>
                      {trade.quantity} @ {formatCurrency(trade.price)}
                    </span>
                  </div>
                  <div>
                    <span>{formatCurrency(trade.total)}</span>
                    {trade.side === "SELL" && (
                      <span
                        className={trade.pnl >= 0 ? "market-up" : "market-down"}
                      >
                        {formatCurrency(trade.pnl)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="market-panel">
            <div className="panel-head">
              <h2>Price Alerts</h2>
              <span className="panel-sub">Get notified instantly</span>
            </div>
            <form className="alert-form" onSubmit={handleAlertSubmit}>
              <select
                value={alertForm.symbol}
                onChange={(event) =>
                  setAlertForm((prev) => ({
                    ...prev,
                    symbol: event.target.value,
                  }))
                }
              >
                {market.map((item) => (
                  <option key={item.symbol} value={item.symbol}>
                    {item.symbol}
                  </option>
                ))}
              </select>
              <select
                value={alertForm.condition}
                onChange={(event) =>
                  setAlertForm((prev) => ({
                    ...prev,
                    condition: event.target.value,
                  }))
                }
              >
                <option value="above">Above</option>
                <option value="below">Below</option>
              </select>
              <input
                type="number"
                min="1"
                value={alertForm.target}
                onChange={(event) =>
                  setAlertForm((prev) => ({
                    ...prev,
                    target: event.target.value,
                  }))
                }
                placeholder="Target price"
              />
              <button className="btn btn-outline-primary" type="submit">
                Create Alert
              </button>
            </form>
            <div className="alert-list">
              {alerts.length === 0 && (
                <p className="text-muted">No alerts configured.</p>
              )}
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`alert-item ${
                    alert.triggered ? "alert-hit" : ""
                  }`}
                >
                  <div>
                    <strong>{alert.symbol}</strong>
                    <span>
                      {alert.condition} {formatCurrency(alert.target)}
                    </span>
                  </div>
                  <span>{alert.triggered ? "Triggered" : "Watching"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketLab;
