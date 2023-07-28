import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/umd',
    format: 'umd',
    name: 'utool',
  },
  plugins: [
    esbuild({
      target: 'es2015'
    }),
    nodeResolve(),
    commonjs(),
    json(),
  ],
}