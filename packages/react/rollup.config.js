import typescript from '@rollup/plugin-typescript';

export default {
    input: ['./src/index.ts', './src/atoms/Color/index.ts'],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [typescript()],
    external: ['react'],
};
