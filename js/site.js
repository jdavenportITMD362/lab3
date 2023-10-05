// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#alt-checkbox').on("click", function () {
  	if ($('#age-verification').is(':checked')) {
  		$('#age-verification').prop("checked", false);
  		$('#alt-checkbox').html("<p></p>");
  	}
  	else {
	  	$('#age-verification').prop("checked", true);
	  	$('#alt-checkbox').html("<p>&#10004;</p>");
  	}
  });
  $('#forAge').on("click", function () { // For some reason for ckicking on the label to work the way it should the checked values need to be flipped?
  	if ($('#age-verification').is(':checked')) {
			$('#age-verification').prop("checked", true);
			$('#alt-checkbox').html("<p></p>");
  	}
  	else {
			$('#age-verification').prop("checked", false);
			$('#alt-checkbox').html("<p>&#10004;</p>");
		}
  });
});
