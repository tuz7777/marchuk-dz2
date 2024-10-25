let btn = document.querySelector('.main-ferst__btn');
btn.addEventListener('click',function(){
    let modal = document.querySelector('.modal');
    modal.classList.add('modal-show');
})
let exit = document.querySelector('.modal-body__exit');
exit.addEventListener('click' ,function(){
    let modal = document.querySelector('.modal');
    modal.classList.remove('modal-show');
})