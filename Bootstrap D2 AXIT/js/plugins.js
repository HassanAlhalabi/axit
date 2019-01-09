$(document).ready(function(){

	//navabar tranparency effect:
	var nav = $('nav');
	$(window).on('scroll',function(){
		if ( $(window).scrollTop() > nav.height()) {
			if (! nav.hasClass('transparent-nav')) {
				nav.addClass('transparent-nav');
			}
		}	else {
			nav.removeClass('transparent-nav');
		}
	});

	//Change active tabs link
	$('.nav-tabs>li').on('click',function(event){
		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content' + $(this).data('cat')).addClass('active').siblings().removeClass('active');
	});
	
});


