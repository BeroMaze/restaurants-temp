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
    $('#eventsPage').css('display', 'flex');
    $('#navList li').removeClass('mainMenuOn');
    $(this).addClass('mainMenuOn');

    $.post('/eventSendBack', {}, function(data) {
    }).done(function(data) {
      var date;
      var event;
      var time;
      var amPm;
      data[0].forEach(function(each) {
        console.log(each);
        if(Number(each.substring(0, 1))){
          date = each.substring(5, 10);
          time = [each.substring(11, 13), each.substring(14, 16)];
          console.log(time[0].substring(0, 1));
          if (time[0].substring(0, 1) === '0') {
            amPm = 'am';
            console.log(amPm);
          }
          else {
            amPm = 'pm';
          }
          console.log(time);
          if(time[0].substring(1, 2) === '0') {
            time = '12' + ':' + time[1];
            console.log(time);
            if (time[0].substring(0, 1) === '0') {
              amPm = 'am';
            }
          }
          else {
            time =  time[0].substring(1, 2) + ':' + time[1];
            console.log(time);
          }
        }
        else {
          event = each;
          console.log(event);
          console.log(date + ' ' + event);
          $('#sideEvents').append('<h4>'+date + ' ' + time + amPm +' ' + event+ '<h4/><br>');
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
  if ($(this).text() === 'Food Menu') {
    $('.menuPic').hide();
    $('#foodPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Drink Menu') {
    $('.menuPic').hide();
    $('#drinkPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Dessert Menu') {
    $('.menuPic').hide();
    $('#dessertPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
  else if ($(this).text() === 'Happy Hour') {
    $('.menuPic').hide();
    $('#happyHourPic').show();
    $('#menuOptions li').removeClass('menuLinkOn');
    $(this).addClass('menuLinkOn');
  }
});

$('#footerLink img').on('click', function(event) {
  console.log(this.id);
  if (this.id === 'gMapLink') {
    window.open("https://www.google.com/maps/place/Ray's+Boathouse/@47.6734492,-122.4098541,17z/data=!3m1!4b1!4m5!3m4!1s0x549015de04ed58b1:0x43c0351360cea090!8m2!3d47.6734492!4d-122.4076654", '_blank');
  }
  else if (this.id === 'yelpLink') {
    window.open("https://www.yelp.com/biz/rays-café-seattle-2", '_blank');
  }
  else if (this.id === 'twitterLink') {
    window.open("https://twitter.com/raysboathouse?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", '_blank');
  }
  else if (this.id === 'facebookLink') {
    window.open("https://www.facebook.com/RaysBoathouse/", '_blank');
  }
  else if (this.id === 'instagramLink') {
    window.open("https://www.instagram.com/raysboathouse/", '_blank');
  }
});
