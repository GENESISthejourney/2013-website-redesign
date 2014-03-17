// JavaScript Document

(function($){
  $(document).ready(function() {

    var transactionGroup = Date.now();

    $('input[name=transaction-group]').val(transactionGroup);

    $('form.multi').submit(function(){
      if(!$('input[name=name]', this).val()){
        alert('Name is required.')
        return false;
      }
      if(!$('input[name=email]', this).val()){
        alert('You must provide an email for us to contact you, just in case.')
        return false;
      }

      var dataString = $(this).serialize();

      formSubmit(dataString, function(r){
        if(r.status == 'error')
          $('.slide-out .followup').addClass('error');
        else{
          var quantity = parseFloat($('#form-paypal input[name=quantity]').val());
          $('#form-paypal input[name=quantity]').val(quantity + 1);

          $('.multi-form form.multi').hide();
          $('.multi-form .options').show();
        }
      });
      return false;
    });

    $('a#pay').click(function(){
      $('#form-paypal').submit();
    });

    $('a#add-another').click(function(){
      $('form.multi')[0].reset();
      $('input[name=transaction-group]').val(transactionGroup);
      $('.multi-form .options').hide();
      $('.multi-form form.multi').show();
    });
  });

  formSubmit = function(data, successFunction){
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/',
      data: data,
      success: successFunction
    });
  };
})(jQuery);
