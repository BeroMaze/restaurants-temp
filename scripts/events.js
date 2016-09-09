$('#title').on('click', function(event) {
  location.reload();
});

$('#navList li').on('click', function(event) {
  event.preventDefault();
  if ($(this).text() === 'Menu') {
    $('.mainPages').hide();
    $('#menuPage').show();
    $('#navList li').removeClass('mainMenuOn');
    $(this).addClass('mainMenuOn');
  }
  else if ($(this).text() === 'Events') {
    $('.mainPages').hide();
    $('#eventsPage').show();
    $('#navList li').removeClass('mainMenuOn');
    $(this).addClass('mainMenuOn');
  }
  else if ($(this).text() === 'About') {
    $('.mainPages').hide();
    $('#aboutPage').show();
    $('#navList li').removeClass('mainMenuOn');
    $(this).addClass('mainMenuOn');
  }
  else if ($(this).text() === 'ECT') {
    $('.mainPages').hide();
    $('#ectPage').show();
    $('#navList li').removeClass('mainMenuOn');
    $(this).addClass('mainMenuOn');
  }
});

$('#menuOptions li').on('click', function(event) {
  event.preventDefault();
  if ($(this).text() === 'Breakfast') {
    $('.menuPic').hide();
    $('#breakfastPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Lunch') {
    $('.menuPic').hide();
    $('#lunchPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Dinner') {
    $('.menuPic').hide();
    $('#dinnerPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Happy Hour') {
    $('.menuPic').hide();
    $('#happyhourPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
});
