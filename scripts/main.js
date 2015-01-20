/**
 * Main JavaScript
 * Drnose
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

function on_site_load() {
	Caracal.lightbox = new LightBox('a.image.direct', false, false, true);

	$('form').on('analytics-event', function(event, data) {
            if (!data.error)
                    dataLayer.push({
                    	'event':'leadSent'
                    });
    });
}

$(on_site_load);
