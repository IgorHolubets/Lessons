//adding 5 numbered lines (not through ol):
var body = document.querySelector('body');
var ul = document.createElement('ul');
    for (var i = 0; i < 6; i++) {
      var li = document.createElement('li');
      li.innerText = i;
      ul.appendChild(li);
    }
    body.appendChild(ul);



//popp at (Width < 768):
var popup = document.getElementById('mypopup'),
    openBtn = document.getElementById('myBtn'),
    closeBtn = document.querySelector('.close');

    openBtn.addEventListener('click', function () {
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
          popup.style.display = 'block';
        }
      });
  
      closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
      });




//animation:
function hideComments () {
  $("#comments").hide(1000,function() {
    $("#hide").hide();
    $("#show").show();
  });
}
function showComments () {
  $("#comments").show(1000,function() {
    $("#hide").show();
    $("#show").hide();
  });
}
$(document).ready (function () {
  $("#hide").bind ("click", hideComments);
  $("#show").bind ("click", showComments);
});