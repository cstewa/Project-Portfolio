$(document).ready(function(){

  // initial stuff

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

  // slideshow general

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

  //slideshow specific

  $('.continue_reading').on('click', function() {
    $('.description_paragraph').html("That sentience escaped my mind, of course, upon my arrival back to stable ground. But wouldn't it be cool if there were a way to bring those moments back? To reorient yourself and others in the mental and visual place you were at the time of your realization? Maybe by connecting a thought, an image (in this case, a person engulfed by a stunning landscape), and the part of the world in which you found yourself, you could more fully express what your insight truly entailed. </br> </br> And that was the vision for our app. Twitter meets Instagram but for intellectual thoughts. With an eye to travel and communal photojournalism.")
  });

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

  $('a.title.target').hover(
    function() {
      $(this).next().text("Travelers. Artists, authors, photographers. Introspective friends. Anyone who can recognize and express thoughts that churn others' minds, or that transport them somewhere valuable for a brief moment.");
    },
    function() {
      $(this).next().text(" ");
    }
  );

  $('a.title.challenges').hover(
    function() {
      $(this).next().text("Getting users comfortable with posting insights they might not otherwise have shared or might be self-conscious about. Weeding out the jokes and the posts that don't take the mission seriously. Reframing social media as an art form.");
    },
    function() {
      $(this).next().text(" ");
    }
  );

  $('a.title.features').hover(
    function() {
      $(this).next().text("A rake task importing users' Tweets that both begin with 'Here I realized' and have an associated picture. Responsive design. Analytics on what types of image/thought combinations resonate most with people. Acting on that data.");
    },
    function() {
      $(this).next().text(" ");
    }
  );








});
