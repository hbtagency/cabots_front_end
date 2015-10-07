// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";
 
// @codekit-append "../bower_components/slick-carousel/slick/slick.js";
// @codekit-append "modules/_slick.js";
 
// @codekit-append "project/_navigation.js"; 


/* ==========================================================================
   _DG.js - Base JS for the 24 theme with abstracted modules
   ========================================================================== */

;(function($, window) {

  var _DG = {

    // this is our top level module, the module that sets up the namespace and secondary level modules
    Modules: {},

    Events: $({}),

    init: function () {

      // here we are looping round all of the modules in our app.Modules object. We could have an exclude array for modules
      // that we don't want to be immediately initialised. We could initialise them later on in our application lifecycle

      // Loop through and run init on each module
      for(var x in _DG.Modules) {

        _DG.Modules[x].init($);

      }

      // the most useful part of this is Events. Modules shouldn't know about each other, so they're completely decoupled. We use
      // app.Events to 'trigger' and use 'on' to send/receive messages and data around our application. The 'trigger' function
      // takes data as it's second parameter which is accessible in the 'params' object in the receiving function.

      //_DG.Events.trigger('render');

    }

  };

  // expose the  globally
  window._DG = _DG;

  // Init
  $( _DG.init );

})(jQuery, window);