$(document).ready(function(){
  //question 1
  $('a:contains("eal")').css('color','red');

  //question 2
  $('a').on('click', function(event){
    event.preventDefault();
    $(this).fadeOut();
  });
  
});
