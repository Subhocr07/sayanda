const rateLimit = require("express-rate-limit");

function createRateLimiter() {
  const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // limit each IP to 10 requests per windowMs
    handler: (req, res, next) => {
      const now = Date.now();
      const retryAfter = Math.ceil((req.rateLimit.resetTime - now) / 1000);

      // send JSON response with error message and retry-after header
      res.status(429).json({
        error: "Too many requests, please try again later.",
        retryAfter,
        retryAfterSeconds: `${Math.max(retryAfter, 0)} seconds`,
      });
    },
  });

  return (req, res, next) => {
    limiter(req, res, next);
  };
}

module.exports = createRateLimiter;
