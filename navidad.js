   // Crear copos de nieve
   function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    document.getElementById('snowflake-container').appendChild(snowflake);

    const startDelay = Math.random() * 1;
    const duration = Math.random() * 5 + 5;

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = -startDelay + 's';

    // Eliminar el copo de nieve después de que cae
    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
    });
}

// Generar copos de nieve cada segundo
setInterval(createSnowflake, 1000);

// Crear estrellas parpadeantes
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    document.getElementById('lights-container').appendChild(star);
}

// Generar estrellas cada segundo
setInterval(createStar, 1000);