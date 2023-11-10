const carouselIndicators = document.getElementById('radio-buttons');
        const carouselInner = document.querySelector('.carousel-inner');

        for (let i = 0; i < carouselInner.children.length; i++) {
            const indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#carouselExampleIndicators');
            indicator.setAttribute('data-slide-to', i);
            indicator.classList.add('radio-button');
            indicator.addEventListener('click', () => showImage(i));
            carouselIndicators.appendChild(indicator);
        }

        let currentIndex = 0;

        function showImage(index) {
            $('#carouselExampleIndicators').carousel(index);
            updateRadioButtons(index);
            currentIndex = index;
        }

        function updateRadioButtons(index) {
            const radioButtons = document.querySelectorAll('.radio-button');
            radioButtons.forEach((button, i) => {
                button.classList.toggle('active', i === index);
            });
        }

        // Initial setup
        showImage(currentIndex);