$(document).ready(function(){

  $(window).load(function () {
    $('#slideshow').hide();
  });

  $('.orbit-timer').remove();
  $('.orbit-bullets').remove();


  $('#email_link').hover(
    function() {
      $(this).text(" ");
      $(this).append("<a id= 'email_actual' href = '#'> christina.v.stewart@gmail </a>")
    },
    function() {
      $(this).find("#email_actual").remove();
      $(this).text("Email");
    }
  );

  $('#x').on('click', function() {
    $('#slideshow').hide();
    $('#project_holder').show();
  });

  $('#insights').on('click', function() {
    $("#slideshow").show();
    $('#project_holder').hide();
    $("#noesis_slideshow").show().siblings().not("#x").hide();
  });

  $('#corequest').on('click', function() {
    $("#slideshow").show();
    $('#project_holder').hide();
    $("#corequest_slideshow").show().siblings().not("#x").hide();
  });

});
