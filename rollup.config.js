import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: 'src/package.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        name: 'react-ts-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
    ],
  },
  {
    input: 'dist/esm/types/package.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
]
