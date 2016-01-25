// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: ADRIA.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     
    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.fullheightmin').css('min-height',vH);
     $('.fullwidth').css('width',vW);
  
   

   //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });



    $("#team-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,3],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });


    $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager',
      controls: false
    });

    $('.features-slider-triggers a').click(function(){
      $('.features-slider-triggers a').removeClass('features-triggered');
      $(this).addClass('features-triggered');
    })


   

    //Highlight the navigation on focusing a section
   $('.standard-nav li > a').click(function(){
        $('.standard-nav li > a').removeClass('highlighted');
        $(this).addClass('highlighted');
    });
    $('.page, .intro').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.standard-nav li > a').removeClass('highlighted');
        $('#'+sectionId+'-linker').addClass('highlighted');
    });






    //Form Validation
    $(document).ready(function($) {

  // hide messages 
  $(".error").hide();
  $(".success").hide();
  
  $('#contactForm input').click(function(e) {
        $(".error").fadeOut();
    });
  
  // on submit...
  $("#contactForm #submit").click(function() {
    $(".error").hide();
    
    //required:
    
    //name
    var name = $("input#name").val();
    if(name == ""){
      //$("#error").fadeIn().text("Name required.");
      $('#fname').fadeIn('slow');
      $("input#name").focus();
      return false;
    }
    
    //email (check if entered anything)
    var email = $("input#email").val();
    //email (check if entered anything)
    if(email == ""){
      //$("#error").fadeIn().text("Email required");
      $('#fmail').fadeIn('slow');
      $("input#email").focus();
      return false;
    }
    
    //email (check if email entered is valid)

    if (email !== "") {  // If something was entered
      if (!isValidEmailAddress(email)) {
        $('#fmail').fadeIn('slow'); //error message
        $("input#email").focus();   //focus on email field
        return false;  
      }
    } 

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

    // comments
    var comments = $("#msg").val();
    
    if(comments == ""){
      //$("#error").fadeIn().text("Email required");
      $('#fmsg').fadeIn('slow');
      $("input#msg").focus();
      return false;
    }
  });  
    
    
  // on success...
   function success(){
    $("#success").fadeIn();
    $("#contactForm").fadeOut();
   }
  
    return false;
});




//Parallax INIT
//Initialize Each Parallax Layer  
  function parallaxInit() {
    $('.parallax, .parallax-layer').each(function() {
        $(this).parallax("30%", 0.1);
    });
  } 

  if( !device.tablet() && !device.mobile() ) {

      //Activating Parallax effect if non-mobile device is detected
      $(window).bind('load', function () {
        parallaxInit();             
      });


  } else  {
        
      //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
      $('.parallax, .parallax-layer').addClass('no-parallax');
        
      }




//Portfolio INIT
(function ($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container'),
        wrap, filtersCallback;


    /*********************************
     init cubeportfolio
     *********************************/
    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomPush',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function (url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });


    /*********************************
     add listener for filters
     *********************************/
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function () {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function () {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function (me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

            me.addClass('cbp-filter-item-active');

            wrap.trigger('mouseleave.cbp');
        };

    } else {
        filtersCallback = function (me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }

    filtersContainer.on('click.cbp', '.cbp-filter-item', function () {

        var me = $(this);

        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }
        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function () {
        });

    });


    /*********************************
     activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function () {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    

    // Cube Portfolio is an event emitter. You can bind listeners to events with the on and off methods. The supported events are: 'initComplete.cbp', 'filterComplete.cbp'

    // when the plugin is completed
    gridContainer.on('initComplete.cbp', function () {
        //loadMore.init();
    });

    // when the height of grid is changed
    gridContainer.on('filterComplete.cbp', function () {
        //loadMore.window.trigger('scroll.loadMoreObject');
    });

})(jQuery, window, document);





//Venobox INIT

   $('.venobox, .image-lightbox-link').venobox({
    numeratio: true
    }); 



//WOW Animation INIT
if( !device.tablet() && !device.mobile() ) {

      /*  wow animations triggers if non-mobile device is detected*/ 
        //
        $(window).load(function(){
          new WOW().init();
        });



        $(window).bind('load', function () {
           
          $('.wow').each(function(){
            $(this).closest('.page-section').css({
              'overflow-y':'hidden',
              'overflow-x':'hidden'
            });
          });
         
       
        });
            
    } else {
      
      /* displays a poster image if mobile device is detected*/ 
      
    }
      


//CATSlider INIT (Services Slider)

      $( '#mi-slider' ).catslider();
   
   







    //Setup waypoints plugin
    $('.page').first().waypoint(function (event, direction) {

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
          $('.standard-header-top').animate({
              opacity: 1
              }, 500, function() {
              // Animation complete.
              });
          $('.standard-header-bottom').addClass('move-top');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
          $('.standard-header-top').animate({
              opacity: 0
              }, 500, function() {
              // Animation complete.
              });
          $('.standard-header-bottom').removeClass('move-top');
        }

    }, { offset: 150 });

});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

