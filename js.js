let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame,1);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click',function(){
        myAnimation();
});
