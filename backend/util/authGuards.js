const WINDOW_MS = 15 * 60 * 1000;
const MAX_LOGIN_ATTEMPTS = 5;
const MAX_RECOVERY_ATTEMPTS = 3;

const loginAttempts = new Map();
const recoveryAttempts = new Map();

const getKey = (email, ip) => `${String(email || "").toLowerCase()}::${ip || "unknown"}`;

const cleanupIfExpired = (store, key) => {
  const entry = store.get(key);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    store.delete(key);
    return null;
  }
  return entry;
};

const getRetrySeconds = (entry) =>
  Math.max(1, Math.ceil((entry.expiresAt - Date.now()) / 1000));

const registerFailure = (store, key, maxAttempts) => {
  const existing = cleanupIfExpired(store, key);
  const next = existing
    ? { count: existing.count + 1, expiresAt: existing.expiresAt }
    : { count: 1, expiresAt: Date.now() + WINDOW_MS };

  store.set(key, next);

  return {
    blocked: next.count >= maxAttempts,
    attemptsRemaining: Math.max(0, maxAttempts - next.count),
    retryAfterSeconds: getRetrySeconds(next),
  };
};

const getStatus = (store, key, maxAttempts) => {
  const entry = cleanupIfExpired(store, key);
  if (!entry) {
    return { blocked: false, attemptsRemaining: maxAttempts };
  }

  return {
    blocked: entry.count >= maxAttempts,
    attemptsRemaining: Math.max(0, maxAttempts - entry.count),
    retryAfterSeconds: getRetrySeconds(entry),
  };
};

const clearStatus = (store, key) => {
  store.delete(key);
};

const getLoginKey = (email, ip) => getKey(email, ip);
const getRecoveryKey = (email, ip) => getKey(email, ip);

module.exports = {
  MAX_LOGIN_ATTEMPTS,
  MAX_RECOVERY_ATTEMPTS,
  getLoginThrottleStatus(email, ip) {
    return getStatus(loginAttempts, getLoginKey(email, ip), MAX_LOGIN_ATTEMPTS);
  },
  registerLoginFailure(email, ip) {
    return registerFailure(loginAttempts, getLoginKey(email, ip), MAX_LOGIN_ATTEMPTS);
  },
  clearLoginFailures(email, ip) {
    clearStatus(loginAttempts, getLoginKey(email, ip));
  },
  getRecoveryThrottleStatus(email, ip) {
    return getStatus(recoveryAttempts, getRecoveryKey(email, ip), MAX_RECOVERY_ATTEMPTS);
  },
  registerRecoveryFailure(email, ip) {
    return registerFailure(recoveryAttempts, getRecoveryKey(email, ip), MAX_RECOVERY_ATTEMPTS);
  },
  clearRecoveryFailures(email, ip) {
    clearStatus(recoveryAttempts, getRecoveryKey(email, ip));
  },
};
