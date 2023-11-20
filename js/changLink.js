// call back function example
//$('body').hide().fadeIn(1000, function(){alert("done");});
/* how jquery event working */

$('h1').click(function(){
  $(this).text("Hide the image");
  $('img').hide();
  $('body').children('p').slideToggle();
});

// play with jQuery

// update the image link

$('img').each(function(){
  var path = $(this).attr('src');
  var newpath = "img/" + path;
  $(this).attr("src", newpath);
  console.log(newpath);
});

$('a').each(function(){
  var mypath = "https://www.google.com";
  $(this).attr('href', mypath);
  $(this).css("text-decoration", "line-through");
  
});