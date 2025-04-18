// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import contentLoader from './rollup-plugin-content-loader';

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
  // 1. Load all vars from .env(.mode) into an object
  const env = loadEnv(mode, process.cwd(), '');
  // 2. Merge into Node’s process.env
  process.env = { ...process.env, ...env };

  return defineConfig({
    plugins: [
      sveltekit(),
      contentLoader()
    ]
  });
};
