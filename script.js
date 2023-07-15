var soundPlayed = false;

function playSound() {
    if (!soundPlayed) {
        var audio = new Audio('micancion.mp3');
        audio.play();
        soundPlayed = true;
    }
}

function handleClick() {
    playSound();
    document.getElementById('click-text').remove();
    document.getElementById('overlay').classList.add('visible');
}

document.addEventListener('DOMContentLoaded', function() {
    var clickText = document.getElementById('click-text');
    clickText.style.fontSize = '24px';
    clickText.style.cursor = 'pointer';
    
    clickText.addEventListener('click', handleClick);
});

document.addEventListener('DOMContentLoaded', function() {
    var customCursor = document.getElementById('custom-cursor');
    
    // Seguir el cursor
    document.addEventListener('mousemove', function(event) {
        customCursor.style.left = event.clientX + 'px';
        customCursor.style.top = event.clientY + 'px';
    });
});

var faviconImages = [
    'favicon1.jpg',
    'favicon2.jpg',
    'favicon3.jpg'
];

var faviconIndex = 0;

function changeFavicon() {
    var favicon = document.getElementById('favicon');
    favicon.href = faviconImages[faviconIndex];
    
    faviconIndex++;
    if (faviconIndex >= faviconImages.length) {
        faviconIndex = 0;
    }
}

setInterval(changeFavicon, 1000);
