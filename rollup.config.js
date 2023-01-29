import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const path = require('path');
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'index.js',
        output: [{ file: 'dist/bundle.js', format: 'cjs' }],
        plugins: [commonjs()],
    },
    {
        input: 'index.js',
        output: [
            {
                file: 'dist/bundle.es5.js',
                format: 'cjs',
            },
        ],
        plugins: [
            babel({ configFile: path.resolve(__dirname, '.babelrc') }),
            nodeResolve(),
            commonjs(),
        ],
    },
];
