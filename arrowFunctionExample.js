
const box = document.querySelector('.box');

box.addEventListener('click', function(){
    // console.log(this);
    this.classList.toggle('size');
    setTimeout( () => {
        this.classList.toggle('caption');
    }, 600);
});