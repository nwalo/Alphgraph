$(function () {
  // Update the count down every 1 second
  var x = setInterval(function() {

    var n = 1;
    var tomo = new Date("Oct 12 2020, 00:00:00").getTime() + (3600*24*1000 * n);

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var diff = tomo - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var todayTime = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (diff < 0) {
    // Set new tommorow date);
      var next = Math.abs(diff) / (3600 * 24 * 1000);
      n = Math.ceil(next);
      console.log(n);
      // tomo = tomo + (3600*24*1000);
      tomo = new Date("Oct 12 2020, 00:00:00").getTime() + (3600*24*1000 * (n + 1));
      diff = tomo - now;
      console.log('tday: ' + new Date(now).toUTCString())
      console.log('tomo: ' + new Date(tomo).toUTCString());

      var hrs = 24 - (Math.abs(Math.floor(hours)));
      var mins = 60 - (Math.abs(Math.floor(minutes)));
      var secs = 60 - (Math.abs(Math.floor(seconds)));
      console.log(diff + '; ' + hrs + 'hrs; ' + mins + 'mins; ' + secs + 'secs;' );
      console.log('okay');

      $('.hour').html(hrs);
      $('.mins').html(mins);
      $('.secs').html(secs);
    } else{
      console.log('now ' + new Date(now).toUTCString())
      console.log('tomo ' + new Date(tomo).toUTCString())
      console.log(diff);
      console.log('tomorrow will soon come!');

      $('.hour').html(hours);
      $('.mins').html(minutes);
      $('.secs').html(seconds);
    }

    // function nextGraphics(){
    //     var count = Math.ceil(Math.random() * 10);
    //     var image = 'images/img' + count + '.jpg';
    //     $('header img').attr('src', image)
    //     console.log(image);
    // }

    if(secs === 0 || hours === 0 && minutes === 0 && seconds === 0){
      nextGraphics();
    }

  }, 1000);

  function nextGraphics(){
      var count = Math.ceil(Math.random() * 10);
      var image = 'images/img' + count + '.jpg';
      $('header img').attr('src', image)
      console.log(image);
  }

  nextGraphics();

});
