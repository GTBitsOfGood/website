const { schedule } = require('@netlify/functions');
const fetch = require('node-fetch');
const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const handler = schedule('*/10 * * * *', async () => {
  try {
    const thresholdMs = (parseInt(process.env.DEBOUNCE_THRESHOLD_MINUTES || '10', 10) * 60 * 1000);
    const lastEditStr = await redis.get('contentful:last_edit') || '0';
    const lastBuildStr = await redis.get('contentful:last_build') || '0';
    const lastEdit = parseInt(lastEditStr, 10);
    const lastBuild = parseInt(lastBuildStr, 10);
    const now = Date.now();

    if (lastEdit > lastBuild && (now - lastEdit) >= thresholdMs) {
      const res = await fetch(process.env.NETLIFY_BUILD_HOOK_URL, { method: 'POST' });
      if (!res.ok) {
        throw new Error(`Build hook failed: ${res.status}`);
      }
      await redis.set('contentful:last_build', now.toString());
      console.log('Triggered preview build at:', now);
    } else {
      console.log('No build needed. lastEdit:', lastEdit, 'lastBuild:', lastBuild, 'now:', now);
    }
  } catch (error) {
    console.error('Scheduler error:', error);
  }
});

exports.handler = handler;