let gana_logo = document.getElementById('gana_logo');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');






s1.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/index.html";
    audioelement.src = 'songs/5.mp3';
    gana_logo.src = 'covers/5.jpg';
    audioelement.play();
})

s2.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/index.html";
    audioelement.src = 'songs/2.mp3';
})
