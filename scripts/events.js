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

    $.post('/eventSendBack', {}, function(data) {
    }).done(function(data) {
      var date;
      var event;
      data[0].forEach(function(each) {
        if(Number(each.substring(0, 1))){
          console.log('number: '+ each.substring(5, 10));
          date = each.substring(5, 10);
        }
        else {
          event = each;
          console.log(event);
          console.log(date + ' ' + event);
          $('#sideEvents').append('<h4>'+date + ' ' + event+ '<h4/><br>');
        }
      });
    });
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
