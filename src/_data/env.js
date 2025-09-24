const isPages = process.env.ELEVENTY_ENV === 'pages'
const isDev = process.env.ELEVENTY_ENV === 'dev'

export default {
  baseUrl: isPages
    ? '/11ty-landing-page/'
    : '/',
  isDev,
  analyticsId: 'G-Z2CRM0WHQ4'}
