$(document).on('turbolinks:load', function() {
  $('.header-nav-logo__not_prime').hover(
    function(){ $('.not_prime-popover').show(); },
    function(){ $('.not_prime-popover').hide(); }
  );

  $('.header-nav-account').hover(
    function(){
      $('.header-nav-account').css('border-color', '#4f5965')
      var $pos = $('.header-nav-account__image').position();
      $('.nav-account-popover').css('left',$pos.left - 390);
      $('.nav-account-popover').show();
    },
    function(){
      $('.header-nav-account').css('border-color', '#232F3E');
      $('.nav-account-popover').hide(); 
      }
  );
  $('.nav-account-popover').hover(
    function(){ $('.header-nav-account').css('border-color', '#232F3E'); },
    function(){ $('.header-nav-account').css('border-color', '#4f5965'); }
  );
});

