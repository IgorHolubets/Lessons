//1  ДОМАШКА ДО УРОКУ №18::::::::
      
    console.log(document.querySelector('ul'));
    console.log(document.querySelectorAll('li')[1]);        //або так:::  
    console.log(document.body.getElementsByTagName('li')[1]);


    //2 ДОМАШКА ДО УРОКУ №18::::::
   
    console.log(document.body.getElementsByClassName('list'));
    console.log(document.body.getElementsByTagName('li')[1].innerHTML = 'JS');
    console.log(document.body.getElementsByTagName('div')[0].style.backgroundColor = 'red');  //не знаю як змінити солір шрифта а не фон




    //3 ДОМАШКА ДО УРОКУ №18::::

    var paragraph = document.querySelector('.text');
    if (paragraph.classList.contains('text')) {
      paragraph.remove();
    }

    var input = document.querySelector('input');
    input.checked = true;