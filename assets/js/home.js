// JavaScript Document

(function($){
  $(document).ready(function() {
    $.getJSON('http://genesischurch.onthecity.org/plaza/events?format=json', function(data) {
        console.log(data);
      }
    );

  });
})(jQuery);
