import { UserConfig } from 'vite';

export default {
    root: 'src',
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
} satisfies UserConfig;
