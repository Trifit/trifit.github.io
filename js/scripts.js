$(function() {

	var CLASSES = {
		PROJECT_DETAIL: 'detail',
		PROJECT_THUMBNAIL: 'thumbnail',
		MENU_ICON: 'menu-icon',
		MENU_TEXT: 'menu-text',
		MENU_BAR: 'wrapper-bar',
		TITLE: 'wrapper-name',
		MENU_CLICKED: 'menu-isClick',
		MENU_NOT_CLICKED: 'menu-isNotClick',
		ARROW_BTN: 'arrow'
	};
	
	var SELECTORS = {
		WORK_SECTION: '#work',
		PROJECT_SECTION: '#work-belt',
		PROJECT_WRAP: '#work-wrap',
		THUMBNAILS_WRAP: '#thumb-wrap',
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
		this.$workContainer = null;

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
			.smoothScroll()
			.inject();

		return this;
	};

	Sliding.prototype.createChildren = function() {
		this.$projDetail = $('.' + CLASSES.PROJECT_DETAIL);
		this.$projThumnail = $('.' + CLASSES.PROJECT_THUMBNAIL);
		this.$projSection = $(SELECTORS.PROJECT_SECTION);
		this.$arrowBtn = $('.' + CLASSES.ARROW_BTN);
		this.$thumbnail_wrap = $(SELECTORS.THUMBNAILS_WRAP);
		this.$project_wrap = $(SELECTORS.PROJECT_WRAP);
		this.$menuIcon = $('.' + CLASSES.MENU_ICON);
		this.$menuText = $('.' + CLASSES.MENU_TEXT);
		this.$menuBar = $('.' + CLASSES.MENU_BAR);
		this.$title = $('.' + CLASSES.TITLE);
		this.$workContainer = $(SELECTORS.WORK_SECTION);

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
		this.handleArrowClick = $.proxy(this.onArrowClick, this);
		this.handleMenuClick = $.proxy(this.onMenuItemClick, this);
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
			$(this).children(this.$projDetail).not('#arrow').hide();			
		});

		return this;		
	};

	Sliding.prototype.smoothScroll = function (){
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	this.$menuIcon.children().addClass(this.menuNotClicked);
				var target = $(this.hash);
		      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      	if (target.length) {
		        	$('html,body').animate({
		          		scrollTop: target.offset().top
		        	}, 1000);
		        	this.$menuText.children().slideToggle();
		        return false;
		      }
		    }
  		});
		return this;
	};

	Sliding.prototype.resMenu = function (){
	    if (window.matchMedia('(max-width: 870px)').matches) {
	    	this.$title.prependTo(this.$menuBar);
		    this.$title.children('h2').hide();
	        this.$menuText.children().hide();
	        this.$menuIcon.show();
	    } else {
	        this.$menuText.children().show();
	        this.$menuIcon.hide();
	    }
	    
		return this;
	};

	Sliding.prototype.inject = function (){
		// Elements to inject
		var mySVGsToInject = document.querySelectorAll('img.inject-me');

		// Do the injection
		SVGInjector(mySVGsToInject);

		return this;
	};
	//////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////

    Sliding.prototype.onThumbnailClick = function(e){    	
    	var $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
    	var temp = 	'.' + CLASSES.PROJECT_THUMBNAIL;

    	this.clickedItem = $(e.target).closest(temp).data('item');

		this.$project_wrap.children().eq(this.clickedItem).toggle();
		this.$thumbnail_wrap.hide();

		$projSection.animate({left:"-100%"});		
    };

    Sliding.prototype.onArrowClick = function(e){
    	var $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
    	
    	this.$thumbnail_wrap.show();
    	$projSection.animate({left:"0"});

    	this.$project_wrap.children().each(function(index){
			$(this).fadeOut(250);													
		});
		
   		$('html,body').animate({scrollTop: this.$workContainer.offset().top}, 300);
    };

    Sliding.prototype.onMenuItemClick = function(e){
    	
    	this.$menuText.children().slideToggle();

    	if(this.$menuIcon.children().hasClass(this.menuClicked)){
    		this.$menuIcon.children().removeClass(this.menuClicked);
    		this.$menuIcon.children().addClass(this.menuNotClicked);
    	}else{
    		this.$menuIcon.children().removeClass(this.menuNotClicked);
    		this.$menuIcon.children().addClass(this.menuClicked);
    	}    	
		
    };
		
	return new Sliding();    

});