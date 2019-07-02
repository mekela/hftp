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
});