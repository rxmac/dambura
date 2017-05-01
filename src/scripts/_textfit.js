// Version 1.0.0 by Kevin Thornbloom.

function textfit() {

	$('.textfit').each(function() {
		$(this).css('font-size','initial');
		$(this).wrapInner('<div class="textfit-inner" style="display:inline-block;white-space:nowrap"></div>');
		var	fontSize = parseInt($(this).css('font-size')),
				containerWidth = $(this).outerWidth(),
				innerWidth = $(this).find('.textfit-inner').outerWidth(),
				newfontSize = (containerWidth * fontSize) / innerWidth,
				maxFont = $(this).data('textfit-max'),
				minFont = $(this).data('textfit-min'),
				adjust = $(this).data('textfit-adjust');

		if(adjust){ var newfontSize = newfontSize * adjust; }

		if (newfontSize > maxFont) {
			var newfontSize = maxFont
		} else if (newfontSize < minFont) {
			var newfontSize = minFont
		}

		$(this).css('font-size', newfontSize + 'px').find('.textfit-inner').contents().unwrap();

	});
}
