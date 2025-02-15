// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: "dist/index.js",
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    resolve({
      browser: true
    }),
    typescript(),
  ]
};