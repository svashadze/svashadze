let input = document.querySelector('.uk');
let button = document.querySelector('.butt');
let ul = document.querySelector ('.list');

button.addEventListener ('click', function () {
     let value =input.value;
     let li = document.createElement ('li');


     let bt = document.createElement ('button');
     bt.setAttribute ('class', 'bt');
     bt.textContent = 'X';

     bt.addEventListener ('click', function () {
        li.remove ();
         
     })


     li.textContent = value;
     li.appendChild(bt)
     ul.appendChild(li);
     input.value =" ";
     
    
})