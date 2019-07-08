import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
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
    resolve(),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/@babel/runtime/regenerator/index.js': [ 'regenerator' ]
      }
    }),
    babel(),
    uglify(),
    analyze()
  ]
});

output.push({
  input: './example/src/web-component.js',
  output: {
    file: './example/dist/web-component-esm.js',
    format: 'esm'
  },
  plugins: [
    uglify(),
    analyze()
  ]
});

// for testing
output.push({
  input: './mixins/properties-mixin.js',
  output: {
    file: './dist/mixins/properties-mixin.js',
    format: 'esm'
  },
  plugins: [
    uglify(),
    analyze()
  ]
});

export default output;
