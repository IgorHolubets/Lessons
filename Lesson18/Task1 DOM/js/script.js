//1  ДОМАШКА ДО УРОКУ №18::::::::
      
    console.log(document.querySelector('ul'));
    console.log(document.querySelectorAll('li')[1]);        //або так:::  
    console.log(document.body.getElementsByTagName('li')[1]);


    //2 ДОМАШКА ДО УРОКУ №18::::::
   
    console.log(document.body.getElementsByClassName('list'));
    console.log(document.body.getElementsByTagName('li')[1].innerHTML = 'JS');
    //console.log(document.body.getElementsByTagName('div')[0].style.color = 'red'); // або так:::
    console.log(document.querySelector('div').style.color = "red");



    //3 ДОМАШКА ДО УРОКУ №18::::

    var paragraph = document.querySelector('.text');
    if (paragraph.classList.contains('text')) {
      paragraph.classList.toggle('text');
    }

    var input = document.querySelector('input');
    input.checked = true;


    
   //4 ДОМАШКА ДО УРОКУ №18::::
   //ДОДАТИ В СПИСОК 5 ЕЛЕМЕНТІВ LI З ТЕКСТОМ ВІД 1 ДО 5::::
    
    var ul = document.querySelector('ul');
    for (var i = 1; i < 6; i++) {
      var li = document.createElement('li');
      li.innerText = i;
      ul.appendChild(li);
    }