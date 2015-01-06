$(function() {
	FastClick.attach(document.body);
});

$('#offcanvas').infinitypush({
	openingspeed: 300,
	closingspeed: 300
});

if(window.navigator.standalone == true) {
	$('header').addClass('standalone');
	$('.ma-infinitypush-wrapper .ma-infinitypush-button').css('top','33px');
	var overflow=function(el){
		el.addEventListener('touchstart',function(){
			var top=el.scrollTop,totalScroll=el.scrollHeight,currentScroll=top+el.offsetHeight
			if(top===0){
				el.scrollTop=1
			} else if(currentScroll===totalScroll){
				el.scrollTop=top-1
			}
	})
	el.addEventListener('touchmove',function(evt){
		if(el.offsetHeight<el.scrollHeight)
	evt._isScroller=true
	}
)}
	overflow(document.querySelector('.main'));
	document.body.addEventListener('touchmove',function(evt){
		if(!evt._isScroller){
			evt.preventDefault()
		}
	});
}