const { schedule } = require('@netlify/functions');
const { Redis } = require('@upstash/redis');
const axios = require('axios');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

exports.handler = schedule('*/10 * * * *', async (event, context) => {
  try {
    const thresholdMs =
      parseInt(process.env.DEBOUNCE_THRESHOLD_MINUTES || '10', 10) * 60_000;
    const lastEdit = parseInt(
      (await redis.get('contentful:last_edit')) || '0',
      10
    );
    const lastBuild = parseInt(
      (await redis.get('contentful:last_build')) || '0',
      10
    );
    const now = Date.now();

    if (lastEdit > lastBuild && now - lastEdit >= thresholdMs) {
      const res = await axios.post(process.env.NETLIFY_BUILD_HOOK_URL);
      if (!res.status > 204) throw new Error(`Build hook failed: ${res.status}`);
      await redis.set('contentful:last_build', now.toString());
      console.log('Triggered preview build at:', now);
    } else {
      console.log('No build needed.', { lastEdit, lastBuild, now });
    }
  } catch (error) {
    console.error('Scheduler error:', error);
  }
});
