(function() {
  $(document).ready(function() {
    $(document).resize();
  });

  $(document).resize(function() {
    var width = $(window).width();
    checkScript(width);
  });

  var checkScript = function(width) {
    if(width > 960) {
      $.getScript('/js_large.js');
    } else if(width > 640) {
      $.getScript('/js_medium.js');
    } else {
      $.getScript('/js_small.js');
    }
  };
})();
