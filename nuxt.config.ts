// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {    download: true
,
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Rajdhani: [300, 400, 500, 600, 700],
      'Protest+Revolution' : [400, 500, 600, 700],
      'Cormorant+Upright' : [400, 500, 600, 700],
    },
  },
});