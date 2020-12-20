export default {
  target: "static",
  generate: {
    exclude: [/spa-fallback/],
  },
  modules: ["@nuxtjs/axios"],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    azfunApiUrl: process.env.AZFUN_API_URL,
    apiManagementApiUrl: process.env.APIM_API_URL,
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
  axios: {
    // browserBaseURL: process.env.BROWSER_BASE_URL
    headers: {
      common: {
        "Ocp-Apim-Subscription-Key": process.env.APIM_KEY,
      },
    },
  },
};
