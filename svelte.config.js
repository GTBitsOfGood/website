import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterNode from "@sveltejs/adapter-node"

const adapterChoice = process.env.ADAPTER || 'node';

let adapter;
if (adapterChoice === 'static') {
  adapter = adapterStatic();
} else if (adapterChoice === 'netlify') {
  adapter = adapterNetlify();
} else {
  adapter = adapterNode();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter
  }
};

export default config;