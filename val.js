const clickMeBtn = document.getElementById('click-me');
const music = document.getElementById('bgMusic');
const toggleBtn = document.querySelectorAll('button')[1];


clickMeBtn.addEventListener('click', showLove);

const herName = prompt("What's your name? 💖");

if (herName) {
    document.getElementById('title').innerHTML = `Hey ${herName} 😌❤️`;
    document.getElementById('introText').innerHTML =
        `Hey ${herName}, I made this just for you…
        Not because it’s Valentine’s Day,
        but because you make ordinary days feel special.
        
        I don’t need a special day to celebrate you—
        you make my days brighter and my smile easier 😏💖`;
}

function showLove() {
    document.getElementById('hiddenText').style.display = 'block';
    document.getElementById('bgMusic').play();
}

for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 5) + 's';
    heart.style.fontSize = (16 + Math.random() * 20) + 'px';
    document.body.appendChild(heart);
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        toggleBtn.innerHTML = '⏸ Pause';
    } else {
        music.pause();
        toggleBtn.innerHTML = '▶️ Play';
    }

}
