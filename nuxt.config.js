export default {
  generate: {
    exclude: [/spa-fallback/],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
};
