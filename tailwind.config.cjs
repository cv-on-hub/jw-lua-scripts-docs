/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */

module.exports = {
    presets: [require('@nick-mazuk/ui-config/tailwind')],
    purge: [
        './src/**/*.svelte',
        './src/app.html',
        '**/node_modules/@nick-mazuk/ui-svelte/**/*.svelte',
    ],
}