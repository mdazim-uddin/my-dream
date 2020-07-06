(function ($) {
	'use strict';
	$('.menu-icon i').on( 'click' , function (){
		$('.menu').slideToggle();
	});
	$(window).resize(function(){
		var screansize = $(window).width();
		if (screansize >768) {
			$('.menu').removeAttr('style');
		}
	})
	$('.hed-midd').ripples();
	// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})
})(jQuery);