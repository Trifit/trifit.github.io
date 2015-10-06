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
		this.clickedItem = -1;

		this.init();
	};

	Sliding.prototype.init = function() {
		this.createChildren()
			.setupHandlers()
			.enable();

		return this;
	};

	Sliding.prototype.createChildren = function() {
		this.$projDetail = $(CLASSES.PROJECT_DETAIL);
		this.$projThumnail = $(CLASSES.PROJECT_THUMBNAIL);
		this.$projSection = $(SELECTORS.PROJECT_SECTION);
		this.$arrowBtn = $(SELECTORS.ARROW_BTN);
		this.$thumbnail_wrap = $(CLASSES.THUMBNAILS_WRAP);
		this.$project_wrap = $(SELECTORS.PROJECT_WRAP);

		this.hideProjects();
		
		this.$projThumnail.each( function(index){
			$(this).data('id', index);			
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

	//////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////

    Sliding.prototype.onThumbnailClick = function(e){    	
		var wrap_possition = $(e.target).closest(SELECTORS.PROJECT_SECTION).css('left');
		if (this.clickedItem === -1){
			this.clickedItem = $(e.target).closest('figure').data('id');
			console.log(this.clickedItem);
		}
		

		if(wrap_possition === '0px'){
			$(e.target).closest(SELECTORS.PROJECT_SECTION).animate({left:"-100%"});			
		}else{
			$(e.target).closest(SELECTORS.PROJECT_SECTION).animate({left:"0"});			
		}
				
		/*this.$project_wrap.each(function(index){
			console.log($(this).children(CLASSES.PROJECT_DETAIL + ':eq(' + index + ')'));
			//$(this).children(CLASSES.PROJECT_DETAIL).toggle();
		});*/

		if($(e.target).closest(SELECTORS.ARROW_BTN).attr('id') === 'arrow'){
			console.log(this.$project_wrap.find(CLASSES.PROJECT_DETAIL + ':eq(' + this.clickedItem + ')'));
			this.$project_wrap.find(CLASSES.PROJECT_DETAIL + ':eq(' + this.clickedItem + ')').toggle();
		}

		//this.$project_wrap.find(CLASSES.PROJECT_DETAIL + ':eq(' + clickedElement + ')').toggle();
		return this;
    };
		
	return new Sliding();
});