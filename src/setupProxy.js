const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/invoice-service", {
      target: "https://sandbox.101digital.io",
      changeOrigin: true,
    })
  );
};
