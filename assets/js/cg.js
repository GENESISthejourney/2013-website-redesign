(function($){
  $(document).ready(function() {
    $('a.request-info').click(function(){
        $('div.more-info').toggle();
        $('.more-info .followup').removeClass('error success');
          $('.more-info .signup').show();
            $('form.cg').find("input[type=text], textarea").val("");
        return false;
    });
    $('.more-info a.close').click(function(){
       $('div.more-info').hide();
        return false;
    });

    $('form.cg').submit(function(){
      if(!$('input[name=name]', this).val()){
        alert('Name is required.')
        return false;
      }
      if(!$('input[name=email]', this).val() && !$('input[name=phone]', this).val()){
        alert('You must provide an email or phone for us to contact you.')
        return false;
      }

      var dataString = $(this).serialize();

      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/',
        data: dataString,
        success: function(r) {
          $('.more-info .signup').hide();
          if(r.status == 'error')
            $('.more-info .followup').addClass('error');
          else
            $('.more-info .followup').addClass('success');
        }
      });
      return false;
    });

    $('.more-info a.try-again').click(function(){
      $('.more-info .followup').removeClass('error');
      $('.more-info .signup').show();
    });

  });
})(jQuery);
