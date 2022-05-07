import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/algolia",
      {
        apiKey: "____",
        applicationId: "____",
        lite: false,
        instantSearch: true,
      },
    ],
  ],
})
