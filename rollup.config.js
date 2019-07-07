import babel from 'rollup-plugin-babel';
// import sizes from 'rollup-plugin-sizes';
import { terser as uglify } from 'rollup-plugin-terser';

const output = [];

// const ignoreFiles = [
//   '.eslintrc.js',
//   'rollup.config.js'
// ];

output.push({
  input: './example/src/web-component.js',
  output: {
    file: './example/dist/web-component.js',
    format: 'iife'
  },
  plugins: [
    babel(),
    uglify()
  ]
});

output.push({
  input: './example/src/web-component.js',
  output: {
    file: './example/dist/web-component-esm.js',
    format: 'esm'
  },
  plugins: [
    uglify()
  ]
});

export default output;
