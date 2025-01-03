console.log("Welcome to spotify");

let songIndex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let n1 = document.getElementById('n1');
let gana_logo = document.getElementById('gana_logo');
let search = document.getElementById('search');

let songs = [

    {songName: "Famous Enough By Navaan Sandhu" , filePath: "songs/1.mp3" , gana_logo: "covers/1.jpg"},
    {songName: "Tareeka By Kaur.B" , filePath: "songs/2.mp3" , gana_logo: "covers/2.jpg"},
    {songName: "Daaku b puja karde By Masoom Sharma" , filePath: "songs/3.mp3" , gana_logo: "covers/3.jpg"},
    {songName: "Bigad gaya By Amanraj Gill" , filePath: "songs/4.mp3" , gana_logo: "covers/4.jpg"},
    {songName: "Yaar rabb warge By Mankirt Aulakh" , filePath: "songs/5.mp3" , gana_logo: "covers/5.jpg"},
    {songName: "Gaadi pache gaadi" , filePath: "songs/6.mp3" , gana_logo: "covers/6.jpg"},
    {songName: "Dekhi Dekhi By Parmish" , filePath: "songs/7.mp3" , gana_logo: "covers/7.jpg"},
    {songName: "Fight By Jordan Sandhu" , filePath: "songs/8.mp3" , gana_logo: "covers/8.jpg"},
    {songName: "Gall kon karda By Hustinder" , filePath: "songs/9.mp3" , gana_logo: "covers/9.jpg"},
    {songName: "Dilawara" , filePath: "songs/10.mp3" , gana_logo: "covers/10.jpg"},
    {songName: "Wang da bhar" , filePath: "songs/11.mp3" , gana_logo: "covers/11.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].gana_logo;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})





masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})

audioelement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioelement.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `songs/${songIndex+1}.mp3`;
        gana_logo.src = 'covers/${songIndex+1}.jpg';
        masterSongName.innerHTML = songs[songIndex].songName;
        audioelement.currentTime = 0;
        
        gif.style.opacity = 1;
        masterplay.classList.add('fa-pause')
        masterplay.classList.remove('fa-play')
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=10){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    gana_logo.src = songs[songIndex].gana_logo;
    n1.innerHTML = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.add('fa-pause-cirlce')
    masterplay.classList.remove('fa-play-circle')
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 10;
    }
    else{
        songIndex -=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    gana_logo.src = songs[songIndex].gana_logo;
    n1.innerHTML = songs[songIndex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.add('fa-pause-circle')
    masterplay.classList.remove('fa-circle-play')
})


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('searchModal');
    const openSearchBtn = document.getElementById('openSearchBtn');
    const closeModal = document.querySelector('.close');

   
    openSearchBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

   
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

   
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    
    document.getElementById('searchButton').addEventListener('click', () => {
        const searchQuery = document.getElementById('searchInput').value;
        alert(`Searching for: ${searchQuery}`);
       
        modal.style.display = 'none'; 
    });
});




