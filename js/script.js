document.addEventListener("DOMContentLoaded", function () {
    // Цвета для разноцветных букв
    const colors = ['#FF89AA', '#FF7D01', '#FF498A', '#FF89AA', '#FF7D01', '#FF498A', '#FF89AA'];
    const italicElements = document.querySelectorAll('span.colored-letter');

    // Разноцветные буквы
    italicElements.forEach(element => {
        const word = element.textContent;
        element.innerHTML = '';
        for (let i = 0; i < word.length; i++) {
            const span = document.createElement('span');
            span.textContent = word[i];
            span.style.color = colors[i % colors.length];
            element.appendChild(span);
        }
    });

    // Поисковый слайдер
    const searchButtons = [
        document.getElementById('search-1'),
        document.getElementById('search-2')
    ];
    const slider = document.getElementById('topSliderSearch');
    const closeButton = document.getElementById('closeButton');

    const toggleSlider = () => {
        slider.classList.toggle('active');
    };

    searchButtons.forEach(btn => {
        if (btn) btn.addEventListener('click', toggleSlider);
    });

    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            slider.classList.remove('active');
        });
    }

    document.addEventListener("click", (event) => {
        const clickedInsideSlider = slider?.contains(event.target);
        const clickedOnSearchButton = searchButtons.some(btn => btn?.contains(event.target));
        if (slider && !clickedInsideSlider && !clickedOnSearchButton) {
            slider.classList.remove('active');
        }
    });

    // Меню
    document.querySelectorAll('.submenu-item').forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const sidePanel = document.getElementById("side-panel");
            sidePanel.innerHTML = `<h2>${this.textContent}</h2><p>Информация о ${this.textContent}.</p>`;
            sidePanel.style.display = "block";
            sidePanel.style.left = "0";
        });
    });

    // Закрытие боковой панели
    document.addEventListener("click", function (event) {
        const sidePanel = document.getElementById("side-panel");
        const burger = document.querySelector('.burger');
        if (!sidePanel.contains(event.target) && !burger.contains(event.target)) {
            sidePanel.style.left = "-300px";
        }
    });

    // Избранное
    document.querySelectorAll('.favorites-icon').forEach(button => {
        button.addEventListener('click', function () {
            const slider = document.getElementById('favorites-slider');
            if (slider) {
                slider.classList.toggle('active');
            }
        });
    });

    // Закрытие избранного
    document.addEventListener("click", function (event) {
        const slider = document.getElementById("favorites-slider");
        const isFavoriteClick = [...document.querySelectorAll('.favorites-icon')]
            .some(btn => btn.contains(event.target));
    
        if (slider && !slider.contains(event.target) && !isFavoriteClick) {
            slider.classList.remove('active');
        }
    });

    // Корзина
    document.querySelectorAll('.basket-button').forEach(button => {
        button.addEventListener('click', function () {
            const slider = document.getElementById('basket-slider');
            if (slider) {
                slider.classList.toggle('active');
            }
        });
    });

    // Закрытие корзины
    document.addEventListener("click", function (event) {
        const slider = document.getElementById("basket-slider");
        const clickedBasket = [...document.querySelectorAll('.basket-button')]
            .some(btn => btn.contains(event.target));
    
        if (slider && !slider.contains(event.target) && !clickedBasket) {
            slider.classList.remove('active');
        }
    });

    // Изменение количества товаров
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const quantityDisplay = document.querySelector('.quantity');

    minusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityDisplay.textContent = currentQuantity;
        }
    });

    plusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
    });

    // Фильтры
    document.querySelectorAll(".button-filter button").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".button-filter button").forEach(btn => {
                btn.classList.remove("active");
                btn.style.backgroundColor = "#FBEBF1";
                btn.style.color = "#FF89AA";
            });
            this.classList.add("active");
            this.style.backgroundColor = "#FF89AA";
            this.style.color = "#FFFFFF";
        });
    });

    // Логика для карусели
    const bagContainers = document.querySelectorAll('.bag_pictures');
    bagContainers.forEach(bagContainer => {
        const bagsContainer = bagContainer.querySelector('.bags');
        const leftArrow = bagContainer.querySelector('.left-arrow');
        const rightArrow = bagContainer.querySelector('.right-arrow');
        
        let scrollIndex = 0;
        const itemsToShow = 4;
        const totalItems = bagsContainer.querySelectorAll('span').length;
        const itemWidth = bagsContainer.querySelector('span').offsetWidth + 20;

        leftArrow.addEventListener('click', function () {
            if (scrollIndex > 0) {
                scrollIndex--;
                bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            }
        });

        rightArrow.addEventListener('click', function () {
            if (scrollIndex < totalItems - itemsToShow) {
                scrollIndex++;
                bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            }
        });
    });

    // Обновление текста кнопки "Войти"
    function updateButtonText() {
        const button = document.querySelector('.auth-button.active');
        if (window.innerWidth <= 1440) {
            button.textContent = 'войти |';
        } else {
            button.textContent = 'войти';
        }
    }

    window.addEventListener('load', updateButtonText);
    window.addEventListener('resize', updateButtonText);

    // Переходы
    document.querySelector(".auth-button").addEventListener('click', function () {
        // Логика аутентификации
    });

    // Функция для отображения блоков
    function showBlock(blockId) {
        const allBlocks = document.querySelectorAll('.content1');
        allBlocks.forEach(block => {
            block.style.display = 'none';
        });
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.display = 'block';
        }
    }

    // Показываем первый блок по умолчанию
    showBlock('delivery-payment');
});
////////////////переходы///////////////////

function goToPersonalAccount() {
    var path = (window.location.pathname.includes('index.html')) ? "html/personalaccount.html" : "../html/personalaccount.html";
    window.location.href = path;
    }
    function goToHome() {
    var path = (window.location.pathname.includes('index.html')) ? "#" : "../index.html";
    window.location.href = path;
    }