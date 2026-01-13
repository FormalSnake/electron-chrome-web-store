const esbuild = require('esbuild')
const packageJson = require('./package.json')

console.log(`building ${packageJson.name}`)

// Inlined from shared esbuild.config.base.js
function createConfig(opts = {}) {
  const prod = process.env.NODE_ENV === 'production'
  const define =
    opts.format === 'esm'
      ? {
          ...opts.define,
          __dirname: 'import.meta.dirname',
        }
      : {
          ...opts.define,
        }
  return {
    bundle: true,
    platform: opts.platform || 'node',
    target: 'es2020',
    sourcemap: !prod,
    minify: false,
    external: [],
    loader: {
      '.ts': 'ts',
      '.tsx': 'tsx',
      '.css': 'css',
    },
    ...opts,
    define,
  }
}

function build(config) {
  esbuild.build(config).catch(() => process.exit(1))
}

const EXTERNAL_BASE = [
  'node:crypto',
  'node:events',
  'node:fs',
  'node:module',
  'node:os',
  'node:path',
  'node:stream',
  'node:stream/promises',
  'electron',
  'debug',
]

const external = [...EXTERNAL_BASE, 'adm-zip', 'pbf', 'electron-chrome-web-store/preload']

const esmOnlyModules = ['pbf']

const browserConfig = createConfig({
  entryPoints: ['src/browser/index.ts'],
  outfile: 'dist/cjs/browser/index.js',
  platform: 'node',
  external: external.filter((module) => !esmOnlyModules.includes(module)),
})

const browserESMConfig = createConfig({
  entryPoints: ['src/browser/index.ts'],
  outfile: 'dist/esm/browser/index.mjs',
  platform: 'neutral',
  external,
  format: 'esm',
})

build(browserConfig)
build(browserESMConfig)

const preloadConfig = createConfig({
  entryPoints: ['src/renderer/chrome-web-store.preload.ts'],
  outfile: 'dist/chrome-web-store.preload.js',
  platform: 'browser',
  external,
  sourcemap: false,
})

build(preloadConfig)
