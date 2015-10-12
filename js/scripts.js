$(function() {

	var CLASSES = {
		PROJECT_DETAIL: 'detail',
		PROJECT_THUMBNAIL: 'thumbnail',
		THUMBNAILS_WRAP: 'thumb-wrap',
		MENU_ICON: 'menu-icon',
		MENU_TEXT: 'menu-text',
		MENU_BAR: 'wrapper-bar',
		TITLE: 'wrapper-name',
		MENU_CLICKED: 'menu-isClick',
		MENU_NOT_CLICKED: 'menu-isNotClick'
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
		this.$menuIcon = null;
		this.$menuText = null;
		this.$menuBar = null;
		this.$title = null;

		this.menuClicked = null;
		this.menuNotClicked = null;

		this.menuButtonState = false;

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
		this.$projDetail = $('.' + CLASSES.PROJECT_DETAIL);
		this.$projThumnail = $('.' + CLASSES.PROJECT_THUMBNAIL);
		this.$projSection = $(SELECTORS.PROJECT_SECTION);
		this.$arrowBtn = $(SELECTORS.ARROW_BTN);
		this.$thumbnail_wrap = $('.' + CLASSES.THUMBNAILS_WRAP);
		this.$project_wrap = $(SELECTORS.PROJECT_WRAP);
		this.$menuIcon = $('.' + CLASSES.MENU_ICON);
		this.$menuText = $('.' + CLASSES.MENU_TEXT);
		this.$menuBar = $('.' + CLASSES.MENU_BAR);
		this.$title = $('.' + CLASSES.TITLE);
		this.menuClicked = CLASSES.MENU_CLICKED;
		this.menuNotClicked = CLASSES.MENU_NOT_CLICKED;



		
				
		this.clickedItem = 1;

		this.resMenu();

		this.hideProjects();
		
		this.$projThumnail.each( function(index){
			$(this).data('item', index);
		});
		

		return this;
	};

	Sliding.prototype.setupHandlers = function() {
		this.handleThumbnailClick = $.proxy(this.onThumbnailClick, this);
		this.handleArrowClick = $.proxy(this.onThumbnailClick, this);
		this.handleMenuClick = $.proxy(this.onMenuClick, this);


		return this;
	};

	Sliding.prototype.enable = function() {
		if (this.isEnabled) {
            return this;
        }

        this.$projThumnail.on('click', this.handleThumbnailClick);
        this.$arrowBtn.on('click', this.handleArrowClick);
        this.$menuIcon.on('click', this.handleMenuClick);

        this.isEnabled = true;

		return this;
	};

	Sliding.prototype.hideProjects = function(){
		this.$project_wrap.each(function(index){
			$(this).children(this.$projDetail).toggle();	
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

	Sliding.prototype.resMenu = function (){


	    if (window.matchMedia('(max-width: 480px)').matches) {
	    	this.$title.prependTo(this.$menuBar);
		    
	        this.$menuText.hide();
	        this.$menuIcon.show();
	    } else {
	        this.$menuText.show();
	        this.$menuIcon.hide();
	    }
	    
		return this;
	};
	//////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////

    Sliding.prototype.onThumbnailClick = function(e){    	
    	var $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
    	var temp = 	'.' + CLASSES.PROJECT_THUMBNAIL;

    	this.clickedItem = $(e.target).closest(temp).data('item');

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

    Sliding.prototype.onMenuClick = function(e){
    	
    	if(this.$menuIcon.children().hasClass(this.menuClicked)){
    		this.$menuIcon.children().removeClass(this.menuClicked);
    		this.$menuIcon.children().addClass(this.menuNotClicked);
    	}else{
    		this.$menuIcon.children().removeClass(this.menuNotClicked);
    		this.$menuIcon.children().addClass(this.menuClicked);
    	}

    	$(this.$menuText).slideToggle();
    	$(this.$menuText).slideToggle('medium', function() {
			if ($(this).is(':visible')){
				$(this).css('display','inline-block');
			}
		});
    };
		
	return new Sliding();    

});