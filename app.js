var score = 0;
document.getElementById('hit-score').innerHTML = (score).toString();
var shatterSound = document.getElementById("shatterSound");
var slapSound = document.getElementById("slapSound");
var mainImg = document.getElementById("img").src;
function animateText(e) {
    var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
    console.log(key);
    // key.classList.add('playing');
}
;
function playSoundMobile() {
    slapSound.currentTime = 0;
    slapSound.play();
    // key.classList.add('playing');
}
function removeTransition(e) {
    // console.log(e)
    if (e.propertyName !== 'transform')
        return; //skip if its not transformed
    // after the transition time, we want to reverse everything (this = key)
    this.classList.remove('playing');
}
function changeImage() {
    if (score === 2) {
        document.getElementById("img").src = "hit6.svg";
    }
    else {
        document.getElementById("img").src = "hit2.svg";
        setTimeout(function () { document.getElementById("img").src = "hit1.svg"; }, 200);
    }
}
function throwAway() {
    shatterSound.currentTime = 600;
    document.getElementById("throwaway").style.display = "none";
    setTimeout(function () { document.getElementById("img").src = "hit3.svg"; }, 300);
    setTimeout(function () { document.getElementById("img").src = "hit4.svg"; }, 500);
    setTimeout(function () { document.getElementById("img").src = "hit5.svg"; }, 800);
    setTimeout(function () { shatterSound.play(); }, 600);
    setTimeout(function () { document.getElementById('textbox').innerHTML = "Press space bar to continue."; }, 900);
    // setTimeout (function(){ document.getElementById("img").src = "hit6.svg"  }, 1000);
    console.log("test");
}
function updateUI() {
    playSoundMobile();
    changeImage();
    score += 1;
    setTimeout(function () { document.body.style.background = 'radial-gradient(#9198e5, #e66465)'; });
    setTimeout(function () { document.body.style.background = 'white'; }, 200);
    document.getElementById('hit-score').innerHTML = (score).toString();
    if (score > 4) {
        document.getElementById('textbox').innerHTML = "Ain't life hard?";
        document.getElementById('textbox-mobile').innerHTML = "Ain't life hard?";
        document.getElementById('bar').style.width = "90%";
    }
    if (score > 19) {
        document.getElementById('textbox').innerHTML = "Uhh... are you ok?";
        document.getElementById('textbox-mobile').innerHTML = "Uhh... are you ok?";
        document.getElementById('bar').style.width = "80%";
    }
    if (score > 25) {
        document.getElementById('textbox').innerHTML = "Alright, let's throw the computer OUT THE WINDOW.";
        document.getElementById('textbox-mobile').innerHTML = "Alright, let's throw the computer OUT THE WINDOW.";
        document.getElementById("throwaway").style.display = "block";
        document.getElementById('throwaway').innerHTML = "THROW COMPUTER 😵";
        document.getElementById('bar').style.width = "70%";
    }
    if (score > 29) {
        document.getElementById('textbox').innerHTML = "I think it's time for you to take a break.";
        document.getElementById('textbox-mobile').innerHTML = "I think it's time for you to take a break.";
        document.getElementById('bar').style.width = "60%";
    }
    if (score > 39) {
        document.getElementById('textbox').innerHTML = "I know this sucks but you'll get out of it and feel so much better instantly.";
        document.getElementById('textbox-mobile').innerHTML = "I know this sucks but you'll get out of it and feel so much better instantly.";
        document.getElementById('bar').style.width = "50%";
        document.getElementById('bar').style.background = "rgb(255, 163, 3)";
    }
    if (score > 49) {
        document.getElementById('textbox').innerHTML = "Welp, I hope this is kinda helpful at the least.";
        document.getElementById('textbox-mobile').innerHTML = "Welp, I hope this is kinda helpful at the least.";
        document.getElementById('bar').style.width = "40%";
    }
    if (score > 75) {
        document.getElementById('textbox').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
        document.getElementById('textbox-mobile').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
        document.getElementById('bar').style.width = "30%";
    }
    if (score > 100) {
        document.getElementById('textbox').innerHTML = "You just passed 100! You're accomplishing something!";
        document.getElementById('textbox-mobile').innerHTML = "You just passed 100! You're accomplishing something!";
        document.getElementById('bar').style.width = "20%";
        document.getElementById('bar').style.background = "red";
    }
    if (score > 150) {
        document.getElementById('textbox').innerHTML = "Should I call the ambulance...?";
        document.getElementById('textbox-mobile').innerHTML = "Should I call the ambulance...?";
        document.getElementById('bar').style.width = "10%";
    }
    if (score > 2) {
        document.getElementById('textbox').innerHTML = "Congratulations, you have succesfully destroyed the computer.";
        document.getElementById('textbox-mobile').innerHTML = "Congratulations, you have succesfully destroyed the computer.";
        document.getElementById('bar').style.width = "0%";
    }
}
document.body.onkeyup = function (e) {
    if (e.keyCode == 32 && score !== 3) {
        updateUI();
    }
};
// transition end event
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) { return key.addEventListener('transitionend', removeTransition); });
window.addEventListener('keydown', animateText);
