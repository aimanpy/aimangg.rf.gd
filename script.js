var soundPlayed = false;
var audio = new Audio('micancion.mp3');
audio.loop = true; // Reproducir en bucle

function playSound() {
    if (!soundPlayed) {
        audio.play();
        soundPlayed = true;
    }
}

// Evento 'ended' para reiniciar la reproducción
audio.addEventListener('ended', function() {
    audio.currentTime = 0; // Reiniciar al principio del audio
    audio.play();
});

function handleClick() {
    playSound();
    document.getElementById('click-text').remove();
    document.getElementById('overlay').classList.add('visible');
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function() {
    var clickText = document.getElementById('click-text');
    clickText.style.fontSize = '24px';
    clickText.style.cursor = 'pointer';
    
    clickText.addEventListener('click', handleClick);
});
