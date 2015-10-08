$(function() {

	var CLASSES = {
		PROJECT_DETAIL: '.detail',
		PROJECT_THUMBNAIL: '.thumbnail',
		THUMBNAILS_WRAP: '.thumb-wrap'
	};
	
	var SELECTORS = {
		PROJECT_SECTION: '#work-belt',
		ARROW_BTN: '#arrow',
		PROJECT_WRAP: '#work-wrap'
	};

	

	var Sliding = function (){
		this.$projDetail = null;
		this.$projSection = null;
		this.$projThumnail = null;
		this.$arrowBtn = null;
		this.$thumbnail_wrap = null;
		this.$project_wrap = null;
		this.clickedItem = 0;

		this.init();
	};

	Sliding.prototype.init = function() {
		this.createChildren()
			.setupHandlers()
			.enable()
			.smoothScroll();

		return this;
	};

	Sliding.prototype.createChildren = function() {
		this.$projDetail = $(CLASSES.PROJECT_DETAIL);
		this.$projThumnail = $(CLASSES.PROJECT_THUMBNAIL);
		this.$projSection = $(SELECTORS.PROJECT_SECTION);
		this.$arrowBtn = $(SELECTORS.ARROW_BTN);
		this.$thumbnail_wrap = $(CLASSES.THUMBNAILS_WRAP);
		this.$project_wrap = $(SELECTORS.PROJECT_WRAP);
		this.clickedItem = 1;

		this.hideProjects();
		
		this.$projThumnail.each( function(index){
			$(this).data('item', index);					
		});

		return this;
	};

	Sliding.prototype.setupHandlers = function() {
		this.handleThumbnailClick = $.proxy(this.onThumbnailClick, this);
		this.handleArrowClick = $.proxy(this.onThumbnailClick, this);

		return this;
	};

	Sliding.prototype.enable = function() {
		if (this.isEnabled) {
            return this;
        }

        this.$projThumnail.on('click', this.handleThumbnailClick);
        this.$arrowBtn.on('click', this.handleArrowClick);

        this.isEnabled = true;

		return this;
	};

	Sliding.prototype.hideProjects = function(){
		this.$project_wrap.each(function(index){
			$(this).children(CLASSES.PROJECT_DETAIL).toggle();				
		});

		return this;		
	};

	Sliding.prototype.smoothScroll = function (){
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);

		        return false;
		      }
		    }
  		});
			
		
		return this;
	};
	//////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////

    Sliding.prototype.onThumbnailClick = function(e){    	
    	var $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
		this.clickedItem = $(e.target).closest(CLASSES.PROJECT_THUMBNAIL).data('item');
						
		if($(e.target).closest(SELECTORS.ARROW_BTN).attr('id') === 'arrow'){
			this.$project_wrap.children().each(function(index){
				if (index !== 0){
					$(this).fadeOut(250);										
				}
			});
		}else{
			this.$project_wrap.children().eq(this.clickedItem+1).toggle();
		}

		if($projSection.css('left') === '0px'){
			$projSection.animate({left:"-100%"});			
		}else{
			$projSection.animate({left:"0"});			
		}
		
    };
		
	return new Sliding();
});