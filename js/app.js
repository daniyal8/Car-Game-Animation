let cityouter = document.querySelector('.city-outer')
let cityinner = document.querySelector('.city-inner')
setInterval(function (){
    cityouter.classList.toggle('daytonight');
},8000)

document.addEventListener('keypress',keycontrol);

function keycontrol(e){
    if(e.keyCode == 32) {
        cityinner.classList.toggle('cityanimation')
    }
    console.log(e.keyCode);
}