// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Raleway: [400, 500, 600, 700],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/styles/collections/index.scss";',
                },
            },
        },
    },
});
