_DG.Modules.navigation = {

  // this is your root DOM element for your module, a module doesn't have to be connected to the DOM, but if it is,
  // then it should control one element and everything inside it
  el: '.navbar',

  // this is your init function, this runs when the module is first initialised by the app (_DG.js)
  init: function() {

  	$(document).ready(function(){

	    $('.dropdown-toggle').on('mouseenter', function(){

	    	var dropdowns = $(this).siblings('.dropdown-menu');

	    	if(dropdowns.length > 1) {

	    		setTimeout(function(){

		    		// initial offset is nav height
		    		var top_offset = $('.navbar').height() - 1;
		    		
		    		$(dropdowns).each(function() {

		    			$(this).css({'top' : top_offset + 'px'});

		    			top_offset += $(this).find('.dropdown-menu').outerHeight();

		    		});

		    	}, 1);

	    	}

	    });

	    $('.dropdown-menu').on({


	    	mouseenter : function(){

		    	$(this).siblings('.dropdown-menu').addClass('show');

	    	},

	    	mouseleave : function() {

	    		$(this).siblings('.dropdown-menu').removeClass('show');

	    	}

	    });

	});

  },

};

