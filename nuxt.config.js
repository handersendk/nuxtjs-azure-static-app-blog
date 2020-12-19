export default {
  target: "static",
  generate: {
    exclude: [/spa-fallback/],
  },
  modules: ["@nuxtjs/axios"],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    azfunApiUrl: process.env.AZFUN_API_URL,
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
};
