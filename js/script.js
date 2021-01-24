const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active')
});


const counters = document.querySelectorAll('.skills__percent'),
lines = document.querySelectorAll('.skills__progras');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

//form
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('fast');

    $('form').trigger('reset');
  });
  return false;
});

// scroll up
$(window).scroll(function() {
  if($(this).scrollTop()>1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
})

$("body").on('click', '[href*=#up]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
