$(function() {
    var images = ['bg.jpg', 'bg02.jpg', 'bg03.jpg', 'bg04.jpg', 'bg05.jpg', 'bg06.jpg', 'bg07.jpg', 'bg08.jpg', 'bg09.jpg', 'bg10.jpg', 'bg11.jpg',];
    $('body').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
   });