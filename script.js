score = 0;
cross = true;
audiogo = new Audio('mp3.mp3')
document.onkeydown = (e)=>{
    if(e.key=='ArrowUp'){
        man = document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(() => {
            man.classList.remove('animateMan');
        }, 1000);
    }
    if(e.key=='ArrowRight'){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX + 100) + "px";
    }
    if(e.key=='ArrowLeft'){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX - 100) + "px";
    }
}
setInterval(() => {
    man = document.querySelector('.man');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');
    
    dx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(man, null).getPropertyValue('bottom'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX<90 && offsetY<50){
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        man.style.backgroundImage = "url(Sman.png)"
        audiogo.play();
        obstacle.style.backgroundImage = "url(Scar.png)"
        obstacle.classList.remove('obstacleAni');
    }else if(offsetX < 140 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s"; 
        }, 500);
    }
}, 10);

gameScore = document.querySelector('.gameScore')
const updateScore = (score)=>{
    gameScore.innerHTML = "Your Score: " + score;
}