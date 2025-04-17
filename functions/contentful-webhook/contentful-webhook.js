const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

exports.handler = async (event) => {
  try {
    const now = Date.now().toString();
    await redis.set('contentful:last_edit', now);
    console.log('Recorded last edit timestamp:', now);
    return { statusCode: 200, body: 'Recorded' };
  } catch (error) {
    console.error('Error recording edit time:', error);
    return { statusCode: 500, body: 'Error' };
  }
};