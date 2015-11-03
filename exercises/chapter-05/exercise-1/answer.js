(function() {
  $(document).ready(function() {
    var width = $(window).width();
    if(width > 960) {
      $.getScript('/js_large.js');
    } else if(width > 640) {
      $.getScript('/js_medium.js');
    } else {
      $.getScript('/js_small.js');
    }
  });
})();
