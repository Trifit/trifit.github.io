$(function() {
	parallax();
	workBelt();	
	smoothScroll(300);
	//formSubmit();
	minimenu();
}); 

function parallax(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		$("#wrapper-name").css({
			'transform' : 'translateY('+ wScroll/7 +'%)'
		});		
	});
}

function workBelt() {
	//Thumnails items and details items MUST follow the same order and must be one of each
	$(".detail").hide();
	$(".thumbnail").click(function(event){	
		$(this).parent().parent().parent().animate({left:"-100%"});
		$element_clicked = $(".thumbnail").index(this) + 2; // We have to add 2 because in workwrap we have 2 extra childs (the arrow and the svg)
		$(".detail:nth-child("+$element_clicked+")").show();
		$(".thumbnail").hide();		
	});
	$("#arrow").click(function(event){
		$(this).parent().parent().parent().animate({left:"0%"});
		$(".detail").hide();
		$(".thumbnail").show();
	});
}

function smoothScroll(duration){
	$('a[href^="#"]').on('click', function(event) {
	var target = $( $(this).attr('href') );
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, duration);
		}
	});
}

function formSubmit(){
	$( "#contact-form" ).submit(function( event ) {
		$(this).hide("slow");
		$("#contact h3").after("<p class='success-message'>Success!!!</p>").delay(1000);
		event.preventDefault();
	});
}

function minimenu(){
	$(".navbar-icon").hide();
	$(window).resize(function(){
		if ($(window).width() <= 760){	
			$(".wrapper nav").hide();
			$(".navbar-icon").show();
		}	
	});
}