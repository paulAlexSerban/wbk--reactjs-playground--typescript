const typescript = require('@rollup/plugin-typescript');

module.exports = {
    input: [
        './src/index.ts',
        './src/atoms/Color/index.ts',
        './src/atoms/Text/index.ts',
        './src/atoms/Margin/index.ts',
        './src/molecules/Select/index.ts',
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [typescript()],
    external: ['react', '@prj--playground-react/foundation'],
};
