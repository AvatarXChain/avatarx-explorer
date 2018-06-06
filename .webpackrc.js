export default {
  "proxy": {
    "/api": {
      "target": "http://123.56.67.186:4096/api",
      // "target": "http://127.0.0.1:7001/v3",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api" : ""
      },
    }
  },
}