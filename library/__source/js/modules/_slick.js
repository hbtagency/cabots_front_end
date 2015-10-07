_DG.Modules.slick = {

  // this is your root DOM element for your module, a module doesn't have to be connected to the DOM, but if it is,
  // then it should control one element and everything inside it
  el: '.slick',
  gallery: '.inspiration-single .slick-carousel',

  // this is your init function, this runs when the module is first initialised by the app (_DG.js)
  init: function() {

    $(this.el).slick();
    $(this.gallery).slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3
    });

  },

};

