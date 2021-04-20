$(document).ready(function(){
  /* Responsive Menu */
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$(this).closest('header').find('.menu').toggleClass('open');
	});

  /* Toggle Menu Links */
  $('header nav ul li i').click(function(){
    if ($(this).hasClass('open')) {
      $(this).closest('li').find('ul').toggleClass('open');
      $(this).toggleClass('open');
    } else {
      $(this).parents("nav").find("ul li ul").removeClass("open");
      $(this).parents("nav").find("ul li i").removeClass("open");
      $(this).closest('li').find('ul').addClass('open');
      $(this).addClass('open');
    }
	});
});