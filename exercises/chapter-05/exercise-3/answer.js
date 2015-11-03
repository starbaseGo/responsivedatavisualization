(function() {
  $(document).ready(function() {
    var partials = [
      {
        "file":"/partial1.html",
        "destination":"#aside-1"
      },
      {
        "file":"/partial2.html",
        "destination":"#aside-2"
      }
    ];
    for(i=0; i<partials.length; i++) {
      $(partials[i]['destination']).load(partials[i]['file']);
    }
  });
})();
