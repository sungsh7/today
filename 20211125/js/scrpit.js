
// 팝업창 선언및 이벤트

const $btn =document.querySelector('#btn');
const $pop = document.querySelector('#popUp');


$btn.addEventListener('click',()=>{
    $pop.style.display ="none";
});

// 메뉴 슬라이드 

//메뉴선언

const $nav = document.querySelectorAll('#nav>ul');
const $menu = document.querySelectorAll('#menu>li');
const $sub = document.querySelectorAll('.sub');
console.log($nav);
console.log($menu);
console.log($sub);

for(let i = 0 ; i < $menu.length; i++) {
    $menu[i].addEventListener('mouseover',()=>{
    $sub[i].classList.toggle('hidden');
    console.log($sub[i]);
    });
  
} 