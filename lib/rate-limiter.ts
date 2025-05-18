import { LRUCache } from "lru-cache";

// Rate limiting configuration
export const rateLimit = {
  windowMs: 60 * 1000, // 1 minute in milliseconds
  maxRequests: 5, // maximum requests per windowMs
};

// Initialize LRU Cache for rate limiting
export const rateLimitCache = new LRUCache<string, number[]>({
  max: 500, // Maximum number of IP addresses to track
  ttl: rateLimit.windowMs, // Time to live: items automatically expire after windowMs
});

/**
 * Rate limiting function
 * @param ip - The client's IP address
 * @returns Object containing success status and time to reset (if rate limited)
 */
export function checkRateLimit(ip: string): {
  success: boolean;
  timeToReset?: number;
} {
  const now = Date.now();

  // Get timestamps of previous requests from this IP
  const timestamps = rateLimitCache.get(ip) || [];

  // Filter out timestamps that are outside the current window
  const windowStart = now - rateLimit.windowMs;
  const requestsInWindow = timestamps.filter(
    (timestamp) => timestamp > windowStart,
  );

  // If we have fewer requests than allowed, add this request and allow it
  if (requestsInWindow.length < rateLimit.maxRequests) {
    requestsInWindow.push(now);
    rateLimitCache.set(ip, requestsInWindow);
    return { success: true };
  }

  // If we already hit the limit, calculate time to reset
  const oldestTimestamp = Math.min(...requestsInWindow);
  const timeToReset = oldestTimestamp + rateLimit.windowMs - now;

  return {
    success: false,
    timeToReset,
  };
}

/**
 * Check rate limit status
 * @param ip - The client's IP address
 * @returns Object containing information about current rate limit status
 */
export function getRateLimitInfo(ip: string) {
  const now = Date.now();

  // Get timestamps of previous requests from this IP
  const timestamps = rateLimitCache.get(ip) || [];

  // Filter out timestamps that are outside the current window
  const windowStart = now - rateLimit.windowMs;
  const requestsInWindow = timestamps.filter(
    (timestamp) => timestamp > windowStart,
  );

  const requestsRemaining = Math.max(
    0,
    rateLimit.maxRequests - requestsInWindow.length,
  );

  // Calculate reset time
  let resetTime = now + rateLimit.windowMs;
  if (requestsInWindow.length > 0) {
    const oldestTimestamp = Math.min(...requestsInWindow);
    resetTime = oldestTimestamp + rateLimit.windowMs;
  }

  return {
    limit: rateLimit.maxRequests,
    remaining: requestsRemaining,
    reset: resetTime,
    requestsInWindow: requestsInWindow.length,
  };
}
