console.log("Welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay')
let myprogressBar = document.getElementById('myprogressBar')
let gif = document.getElementById('gif');

let songs = [
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Sala -e-Ishq", filepath: "spotifyclone/1.mp3", coverpath: "covers/1.jpg" }
];

audioElement.play();

//Handle play/pass/click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
         masterplay.classList.add('fa-circle-play');
         gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{


//update seekbar 
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
 audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

