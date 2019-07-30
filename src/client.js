import * as sapper from '@sapper/app';
import { googleAnalytics } from './js/google-analytics.js';

sapper.start({
	target: document.querySelector('#sapper')
});

GOOGLE_ANALYTICS_TRACKING_ID = undefined; // TODO: Add in import for tracking id

googleAnalytics(GOOGLE_ANALYTICS_TRACKING_ID);
