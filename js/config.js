$(function() {
	FastClick.attach(document.body);
});

$('[data-toggle="offcanvas"]').click(function () {
	$('.row-offcanvas').toggleClass('active')
});