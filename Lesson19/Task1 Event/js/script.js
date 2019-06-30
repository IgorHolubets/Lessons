//при першому кліку на комірки - появляється колір
//при другому кліку на комірки - зникає колір

$(function() {
  var open = $('.item');
  var close = $('td');
  open.on('click',function(event){
    event.preventDefault();
    open.toggleClass('item__active');
  });
});