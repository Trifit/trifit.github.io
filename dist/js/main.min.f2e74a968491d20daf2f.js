/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {


const init = () => {
	const tumbnails = document.querySelectorAll(".thumbnail");
	tumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', e => {
			const tbnNumber = e.currentTarget.dataset.thumbnailNumber;
		
			e.target.classList.toggle("is-visible");
			document.querySelector('#work-belt').classList.add('move-left');
			document.querySelector('#work-wrap').classList.toggle("is-hidden");
			document.querySelector(`.detail[data-detail-number="${tbnNumber}"]`).classList.toggle("is-hidden");
		});
	});
}
init();
// (function() {
// 	const CLASSES = {
// 		PROJECT_DETAIL: 'detail',
// 		PROJECT_THUMBNAIL: 'thumbnail',
// 		MENU_ICON: 'menu-icon',
// 		MENU_TEXT: 'menu-text',
// 		MENU_BAR: 'wrapper-bar',
// 		TITLE: 'wrapper-name',
// 		MENU_CLICKED: 'menu-isClick',
// 		MENU_NOT_CLICKED: 'menu-isNotClick',
// 		ARROW_BTN: 'arrow'
// 	};
	
// 	const SELECTORS = {
// 		WORK_SECTION: '#work',
// 		PROJECT_SECTION: '#work-belt',
// 		PROJECT_WRAP: '#work-wrap',
// 		THUMBNAILS_WRAP: '#thumb-wrap',
// 	};

// 	const Sliding = function (){
// 		this.$projDetail = null;
// 		this.$projSection = null;
// 		this.$projThumnail = null;
// 		this.$arrowBtn = null;
// 		this.$thumbnail_wrap = null;
// 		this.$project_wrap = null;
// 		this.$menuIcon = null;
// 		this.$menuText = null;
// 		this.$menuBar = null;
// 		this.$title = null;
// 		this.$workContainer = null;

// 		this.menuClicked = null;
// 		this.menuNotClicked = null;

// 		this.menuButtonState = false;

// 		this.clickedItem = 0;

// 		this.init();
// 	};

// 	Sliding.prototype.init = () => this.createChildren().setupHandlers().enable().inject().smoothScroll();

// 	Sliding.prototype.createChildren = function() {
// 		this.$projDetail = $('.' + CLASSES.PROJECT_DETAIL);
// 		this.$projThumnail = $('.' + CLASSES.PROJECT_THUMBNAIL);
// 		this.$projSection = $(SELECTORS.PROJECT_SECTION);
// 		this.$arrowBtn = $('.' + CLASSES.ARROW_BTN);
// 		this.$thumbnail_wrap = $(SELECTORS.THUMBNAILS_WRAP);
// 		this.$project_wrap = $(SELECTORS.PROJECT_WRAP);
// 		this.$menuIcon = $('.' + CLASSES.MENU_ICON);
// 		this.$menuText = $('.' + CLASSES.MENU_TEXT);
// 		this.$menuBar = $('.' + CLASSES.MENU_BAR);
// 		this.$title = $('.' + CLASSES.TITLE);
// 		this.$workContainer = $(SELECTORS.WORK_SECTION);

// 		this.menuClicked = CLASSES.MENU_CLICKED;
// 		this.menuNotClicked = CLASSES.MENU_NOT_CLICKED;

// 		this.clickedItem = 1;

// 		this.resMenu();

// 		this.hideProjects();
		
// 		this.$projThumnail.each( function(index){
// 			$(this).data('item', index);
// 		});
		

// 		return this;
// 	};

// 	Sliding.prototype.setupHandlers = function() {
// 		this.handleThumbnailClick = $.proxy(this.onThumbnailClick, this);
// 		this.handleArrowClick = $.proxy(this.onArrowClick, this);
// 		this.handleMenuClick = $.proxy(this.onMenuItemClick, this);
// 		return this;
// 	};

// 	Sliding.prototype.enable = function() {
// 		if (this.isEnabled) {
//             return this;
//         }

//         this.$projThumnail.on('click', this.handleThumbnailClick);
//         this.$arrowBtn.on('click', this.handleArrowClick);
//         this.$menuIcon.on('click', this.handleMenuClick);

// 		this.isEnabled = true;

// 		return this;
// 	};

// 	Sliding.prototype.hideProjects = function(){

// 		this.$project_wrap.each(function(index){
// 			$(this).children(this.$projDetail).not('#arrow').hide();			
// 		});

// 		return this;		
// 	};

// 	Sliding.prototype.smoothScroll = function (){
// 		$('a[href*=#]:not([href=#])').click(function() {
// 		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// 		    	//.$menuIcon.children().addClass(this.menuNotClicked);
// 				const target = $(this.hash);
// 		      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// 		      	if (target.length) {
// 		        	$('html,body').animate({
// 		          		scrollTop: target.offset().top
// 		        	}, 1000);
// 		        	this.$menuText.children().slideToggle();
// 		        return false;
// 		      }
// 		    }
//   		});
//   		console.log('test');
// 		return this;
// 	};

// 	Sliding.prototype.resMenu = function (){
// 	    if (window.matchMedia('(max-width: 870px)').matches) {
// 	    	this.$title.prependTo(this.$menuBar);
// 		    this.$title.children('h2').hide();
// 	        this.$menuText.children().hide();
// 	        this.$menuIcon.show();
// 	    } else {
// 	        this.$menuText.children().show();
// 	        this.$menuIcon.hide();
// 	    }
	    
// 		return this;
// 	};

// 	Sliding.prototype.inject = function (){
// 		// Elements to inject
// 		const mySVGsToInject = document.querySelectorAll('img.inject-me');

// 		// Do the injection
// 		SVGInjector(mySVGsToInject);

// 		return this;
// 	};
// 	//////////////////////////////////////////////////////////
//     // EVENT HANDLERS
//     //////////////////////////////////////////////////////////

//     Sliding.prototype.onThumbnailClick = function(e){    
// 		const tbnNumber = e.target.dataset.thumbnail-number;

// 		e.target.classList.toggle("is-visible");
// 		document.querySelector("#thumb-cointainer").classList.add('move-left');
// 		document.querySelector(`.detail[data-thumbnail-number="${tbnNumber}"]`).toggle("is-visible");


//     	// const $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
//     	// const temp = 	'.' + CLASSES.PROJECT_THUMBNAIL;

//     	// this.clickedItem = $(e.target).closest(temp).data('item');

// 		// this.$project_wrap.children().eq(this.clickedItem).toggle();

// 		// $projSection.animate({left:"-100%"});		
//     };

//     Sliding.prototype.onArrowClick = function(e){
//     	const $projSection = $(e.target).closest(SELECTORS.PROJECT_SECTION);
    	
//     	//this.$thumbnail_wrap.show();
//     	$projSection.animate({left:"0"});

//     	this.$project_wrap.children().each(function(index){
// 			$(this).fadeOut(250);													
// 		});
		
//    		$('html,body').animate({scrollTop: this.$workContainer.offset().top}, 300);
//     };

//     Sliding.prototype.onMenuItemClick = function(e){
    	
//     	this.$menuText.children().slideToggle();

//     	if(this.$menuIcon.children().hasClass(this.menuClicked)){
//     		this.$menuIcon.children().removeClass(this.menuClicked);
//     		this.$menuIcon.children().addClass(this.menuNotClicked);
//     	}else{
//     		this.$menuIcon.children().removeClass(this.menuNotClicked);
//     		this.$menuIcon.children().addClass(this.menuClicked);
//     	}    	
		
//     };
		
// 	return new Sliding();    

// });

/***/ }),

/***/ "./src/scss/_imports.scss":
/*!********************************!*\
  !*** ./src/scss/_imports.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/_imports.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/_imports.scss */"./src/scss/_imports.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.min.f2e74a968491d20daf2f.js.map