/**
 * Dynamic Water Wave Controller
 */
function triggerWaves() {
    const water = document.getElementById('water');
    const waves = document.querySelector('.waves-container');
    
    createParticles(150, 40); // Updated to relative surface point

    // Reset animations
    water.classList.remove('splash-active', 'water-jolt', 'water-sloshing');
    waves.classList.remove('impact-waves');
    void water.offsetWidth; // Trigger reflow
    
    // Apply new energetic animations
    water.classList.add('splash-active', 'water-jolt', 'water-sloshing');
    waves.classList.add('impact-waves');

    // Return to calm state after animations settle (match CSS durations)
    setTimeout(() => {
        water.classList.remove('splash-active', 'water-jolt', 'water-sloshing');
        waves.classList.remove('impact-waves');
    }, 3000);
}

function createParticles(x, y) {
    const container = document.getElementById('particle-container');
    if (!container) return;

    for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Randomize direction and distance
        const dx = (Math.random() - 0.5) * 120 + 'px';
        const dy = (Math.random() * -80 - 40) + 'px';
        
        p.style.setProperty('--dx', dx);
        p.style.setProperty('--dy', dy);
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.animation = 'particle-fly 0.8s ease-out forwards';
        
        container.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }
}