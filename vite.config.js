import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        // SPA fallback: serve index.html for all routes
        historyApiFallback: true,
    },
    build: {
        rollupOptions: {
            input: 'index.html',
        },
    },
});
