let load  = document.getElementById('load'),
    cons  = document.getElementById('cons'),
    title  = document.getElementById('title'),
    count = document.getElementsByClassName('count')[0],
    box   = document.getElementsByTagName('html')[0],
    btn   = document.querySelector('.header_full'),
    n     = 0,
    num   = 0,
    txt1  = 'soon',
    txt2  = 'slow',
    con,timer;

window.onload=function(){
    timer = setInterval(()=>{
        count.innerHTML = n+'%';
        n < 100 ? n += 1 : [clearInterval(timer),fadeOut(load)
      ];
    },50);
}
const fadeOut = el => {
    el.style.zIndex = 10;
    (function fade() {
        el.style.zIndex -= 1;
        if (el.style.zIndex == 4) {
            load.classList.remove('active');
            count.style.display = 'none';
            setTimeout(function() {
                load.classList.add('hidden');
                title.classList.remove('hidden');
            },800);
            setTimeout(change,5000);
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

const change = () => {
    cons.innerHTML = 'slow';
    setTimeout(change2,400)
}
const change2 = () => {
    cons.innerHTML = 'soon';
    setTimeout(change,5000)
}
