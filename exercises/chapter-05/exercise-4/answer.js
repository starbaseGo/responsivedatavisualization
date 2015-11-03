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
      $(partials[i]['destination']+' a').attr('data-url',(partials[i]['file'])).attr('data-destination',partials[i]['destination']);
    }
  });

  $(document).on('click', 'a', function(e) {
    e.preventDefault();
    var $this = $(e.target);
    $($this.attr('data-destination')).load($this.attr('data-url'));
  });
})();
