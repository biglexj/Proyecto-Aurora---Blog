document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const boxes = document.querySelectorAll('.caja');

    let currentIndex = 0;
    const totalBoxes = boxes.length;
    const boxWidth = boxes[0].offsetWidth + 20; // width + margin

    // Generar dots dinámicamente 
    for(let i = 0; i < totalBoxes; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if(i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        wrapper.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => {
        if(currentIndex < totalBoxes - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if(currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalBoxes - 1;
        }
        updateCarousel();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
        });
    });
});