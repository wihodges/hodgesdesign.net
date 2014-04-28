require(['jquery'], function(jquery) {
  console.log('Now running jQuery v' + jQuery().jquery);

  if (Modernizr.canvas) {
      console.log("This browser supports HTML5 canvas!");
    }
});


require(['instafeed'], function() {
  console.log('hello instafeed');

 var feed = new Instafeed({
      get: 'user',
      userId: 1073456701,
        accessToken: '1073456701.841bdb8.4974ede21d644efe81d4e3cd7745f323',
      link: 'true',
      clientId: '841bdb80957f482cbac20d259faa7cac',
      limit: '60'
      });
      feed.run();

});