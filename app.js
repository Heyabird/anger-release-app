var score = 0;
document.getElementById('hit-score').innerHTML = (score).toString();
var shatterSound = document.getElementById("shatterSound");
var slapSound = document.getElementById("slapSound");
var gameoverSound = document.getElementById("gameoverSound");
gameoverSound.volume = 0.3;
var mainImg = document.getElementById("img").src;
function playSlapSound() {
    if (score < 200) {
        slapSound.currentTime = 0;
        slapSound.play();
    }
    else if (score >= 200) {
        // shatterSound.play();
    }
}
function removeTransition(e) {
    // console.log(e)
    if (e.propertyName !== 'transform')
        return; //skip if its not transformed
    // after the transition time, we want to reverse everything (this = key)
    this.classList.remove('playing');
}
function changeImage() {
    document.getElementById("img").src = "hit2.svg";
    if (score >= 199) {
        setTimeout(function () { document.getElementById("img").src = "hit6.svg"; }, 400);
        setTimeout(function () { document.getElementById("img").classList.add("shake"); }, 400);
        setTimeout(function () { document.getElementById("img").classList.remove("shake"); }, 1200);
    }
    else {
        setTimeout(function () { document.getElementById("img").src = "hit1.svg"; }, 200);
        // setTimeout (function(){ document.body.classList.add("shake") }, 100);
        // setTimeout (function(){ document.body.classList.remove("shake") }, 200);
    }
}
function throwAway() {
    shatterSound.currentTime = 600;
    document.getElementById("throwaway").style.display = "none";
    setTimeout(function () { document.getElementById("img").src = "hit3.svg"; }, 300);
    setTimeout(function () { document.getElementById("img").src = "hit4.svg"; }, 500);
    setTimeout(function () { document.getElementById("img").src = "hit5.svg"; }, 800);
    setTimeout(function () { shatterSound.play(); }, 600);
    setTimeout(function () { document.body.classList.add("shake"); }, 600);
    setTimeout(function () { document.body.classList.remove("shake"); }, 1000);
    // setTimeout (function(){ document.getElementById("img").src = "hit6.svg"  }, 1000);
    console.log("test");
    score += 30;
    document.getElementById('hit-score').innerHTML = (score).toString();
    if (score >= 170) {
        setTimeout(function () { computerDestroyed(); }, 1000);
        return;
    }
    setTimeout(function () { document.getElementById('textbox').innerHTML = "Press space bar to continue."; }, 900);
    setTimeout(function () { showScoreIncrease(5, "purple", "50px"); }, 900);
}
function showScoreIncrease(score, color, fontSize) {
    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
    var text = '+' + score;
    var elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.color = color;
    elem.style.fontSize = fontSize;
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight - 100) + "px";
    elem.style.opacity = "0.2";
    document.body.appendChild(elem);
}
function computerDestroyed() {
    gameoverSound.play();
    document.body.style.background = 'radial-gradient(#e66465, black)';
    document.body.style.color = "white";
    document.getElementById("img").src = "hit6.svg";
    document.getElementById("throwaway").style.display = "none";
    document.getElementById('textbox').innerHTML = "Congratulations, you have succesfully destroyed the computer. ";
    document.getElementById('textbox-mobile').innerHTML = "Congratulations, you have succesfully destroyed the computer.";
    document.getElementById('bar').style.width = "0%";
    document.getElementById("end-message").style.display = "block";
}
function updateUI() {
    playSlapSound();
    score += 30;
    showScoreIncrease(1, "red", "30px");
    changeImage();
    setTimeout(function () { document.body.style.background = 'radial-gradient(#9198e5, #e66465)'; });
    setTimeout(function () { document.body.style.background = 'white'; }, 200);
    document.getElementById('hit-score').innerHTML = (score).toString();
    if (score > 199) {
        setTimeout(function () { computerDestroyed(); }, 500);
        return;
    }
    if (score > 1) {
        document.getElementById('textbox').innerHTML = "There you go. Keep going.";
        document.getElementById('textbox-mobile').innerHTML = "There you go. Keep going.";
    }
    if (score > 9) {
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
        // document.getElementById('textbox').style.color = "red";
        document.getElementById('textbox-mobile').innerHTML = "Alright, let's throw the computer OUT THE WINDOW.";
        // document.getElementById('textbox-mobile').style.color = "red";
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
    if (score > 74) {
        document.getElementById('textbox').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
        document.getElementById('textbox-mobile').innerHTML = "Omg. You just hit your head over 75 times. How does that feel?";
        document.getElementById('bar').style.width = "30%";
    }
    if (score > 99) {
        document.getElementById('textbox').innerHTML = "You just passed 100! You're accomplishing something!";
        document.getElementById('textbox-mobile').innerHTML = "You just passed 100! You're accomplishing something!";
        document.getElementById('bar').style.width = "20%";
        document.getElementById('bar').style.background = "red";
    }
    if (score > 149) {
        document.getElementById('textbox').innerHTML = "Should I call the ambulance...?";
        document.getElementById('textbox-mobile').innerHTML = "Should I call the ambulance...?";
        document.getElementById('bar').style.width = "10%";
    }
}
document.body.onkeyup = function (e) {
    if (e.keyCode == 32 && score < 200) {
        updateUI();
    }
};
