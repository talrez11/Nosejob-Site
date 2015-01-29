/**
 * Main JavaScript
 * Drnose
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

function on_site_load() {
	// Caracal.lightbox = new LightBox('a.image.direct', false, false, true);

	$('form').on('analytics-event', function(event, data) {
            if (!data.error)
                    dataLayer.push({
                    	'event':'leadSent'
                    });
    });

    // video dialog
	var video_dialog = new Dialog();

	video_dialog.setTitle(language_handler.getText(null, 'dialog_video_title'));
	video_dialog.setSize(640, 400);

	$('a.video').not('.mobile').click(function(event) {
		// prevent link from working
		event.preventDefault();

		// set content from URL and show it
		video_dialog.setContentFromURL($(this).attr('href'));
		video_dialog.showWhenReady();
	});
}

$(on_site_load);
