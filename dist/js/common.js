$(document).ready(function() {
	//menu
	$( ".menu-trigger" ).click(function() {
		$( ".header__menu" ).addClass( "active" );
		$( ".menu-overlay" ).addClass( "active" );
	});
	$( ".menu-overlay" ).click(function() {
		$( ".header__menu" ).removeClass( "active" );
		$( ".menu-overlay" ).removeClass( "active" );
	});

	//tabs
	$('.events-tab-link a').click(function(event){
		event.preventDefault();
		$('.events-tab-link a').removeClass('active');
		$(this).addClass('active');
		$('.events-tab').hide();
		$($(this).attr('href')).show();
	});

	//drop menu
	$( ".event-sidebar__drop" ).click(function() {
		$( this ).next().slideToggle( "fast" );
	});
});