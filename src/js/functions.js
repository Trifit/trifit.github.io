export const workBelt = () => {
	//Thumnails items and details items MUST follow the same order and must be one of each
	document.querySelector(".thumbnail").click((e)=>{
		const tbnNumber = e.target.dataset.thumbnail-number;

		e.target.classList.toggle("is-visible");
		document.querySelector("#thumb-cointainer").classList.add('move-left');
		document.querySelector(`.detail[data-thumbnail-number="${tbnNumber}"]`).toggle("is-visible");
	});

	document.querySelector("#arrow").click((event)=>{
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