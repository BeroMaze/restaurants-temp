$('#title').on('click', function(event) {
  location.reload();
});

$('#navList li').on('click', function(event) {
  event.preventDefault();
  if ($(this).text() === 'Menu') {
    $('.mainPages').hide();
    $('#menuPage').show();
  }
  else if ($(this).text() === 'Events') {
    $('.mainPages').hide();
    $('#eventsPage').show();
  }
  else if ($(this).text() === 'About') {
    $('.mainPages').hide();
    $('#aboutPage').show();
  }
  else if ($(this).text() === 'ECT') {
    $('.mainPages').hide();
    $('#ectPage').show();
  }
});

$('#menuOptions li').on('click', function(event) {
  event.preventDefault();
  if ($(this).text() === 'Breakfast') {
    $('.menuPic').hide();
    $('#breakfastPic').show();
  }
  else if ($(this).text() === 'Lunch') {
    $('.menuPic').hide();
    $('#lunchPic').show();
  }
  else if ($(this).text() === 'Dinner') {
    $('.menuPic').hide();
    $('#dinnerPic').show();
  }
  else if ($(this).text() === 'Happy Hour') {
    $('.menuPic').hide();
    $('#happyhourPic').show();
  }
});
