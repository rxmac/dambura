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

// Auto resize text on page load and resize
$(window).on('load', textfit).on('resize', textfit);

$(document).ready(function() {

// Resize text on keypress and keyup
// $('.editable').on('keypress', textfit).on('keyup', textfit);


// Scroll to ID
//_____________
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Social Share Business
function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}
var jsSocialShares = document.querySelectorAll(".js-social-share");
if (jsSocialShares) {
  [].forEach.call(jsSocialShares, function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      windowPopup(this.href, 500, 300);
    });
  });
}


});
