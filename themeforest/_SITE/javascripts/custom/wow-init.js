
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

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
      
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

