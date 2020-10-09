$(document).ready(function(){
  $('.header').height($(window).height());
})

$('.flip-card').on('click',
  function(){
    $(this).toggleClass('flipped')
  }
)
