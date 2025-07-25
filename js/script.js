const colors = ['#FF89AA', '#FF7D01', '#FF498A', '#FF89AA', '#FF7D01', '#FF498A', '#FF89AA'];
    
// Получаем все элементы <span class="colored-letter"> на странице
const italicElements = document.querySelectorAll('span.colored-letter');

italicElements.forEach(element => {
    const word = element.textContent; // Получаем текст внутри <span>
    element.innerHTML = ''; // Очищаем содержимое элемента

    // Создаем разноцветные буквы
    for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        span.textContent = word[i]; // Каждая буква
        span.style.color = colors[i % colors.length]; // Устанавливаем цвет
        element.appendChild(span); // Добавляем букву в <span>
    }
});

document.addEventListener("DOMContentLoaded", function() {
const bagContainers = document.querySelectorAll('.bag_pictures');

bagContainers.forEach(bagContainer => {
    const bagsContainer = bagContainer.querySelector('.bags');
    const leftArrow = bagContainer.querySelector('.left-arrow');
    const rightArrow = bagContainer.querySelector('.right-arrow');

    let scrollIndex = 0; // Начальная позиция прокрутки
    const itemsToShow = 4; // Количество элементов, которые показываются
    const totalItems = bagsContainer.querySelectorAll('span').length; // Общее количество элементов
    const itemWidth = bagsContainer.querySelector('span').offsetWidth + 20; // Ширина элемента с учетом отступов

    // Обработчик нажатия на левую стрелку
    leftArrow.addEventListener('click', function() {
        if (scrollIndex > 0) {
            scrollIndex--;
            bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
        }
    });

    // Обработчик нажатия на правую стрелку
    rightArrow.addEventListener('click', function() {
        if (scrollIndex < totalItems - itemsToShow) {
            scrollIndex++;
            bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
        }
    });

});
});
// Меню
document.querySelectorAll('.submenu-item').forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            
            const sidePanel = document.getElementById("side-panel");
            
            // Изменяем содержимое боковой панели в зависимости от выбранного пункта
            sidePanel.innerHTML = "<h2>" + this.textContent + "</h2><p>Информация о " + this.textContent + ".</p>";
            
            // Показываем боковую панель
            sidePanel.style.display = "block"; // Показываем боковую панель
            sidePanel.style.left = "0"; // Сдвигаем в видимую область
        });
    });

    // Закрытие боковой панели при клике вне ее
    document.addEventListener("click", function(event) {
        const sidePanel = document.getElementById("side-panel");
        if (!sidePanel.contains(event.target) && !document.querySelector('.burger').contains(event.target)) {
            sidePanel.style.left = "-300px"; // Скрываем боковую панель
        }
    });
    // Открытие избранного при клике на сердце
    document.getElementById('favorites').addEventListener('click', function() {
        const slider = document.getElementById('favorites-slider');
        slider.classList.toggle('active'); // Добавляем или удаляем класс для показа слайдера
    }); 
    // Закрытие избранного
    document.addEventListener("click", function(event) {
        const sidePanel = document.getElementById("favorites-slider");
        const favoritesButton = document.getElementById('favorites');

        // Проверяем, был ли клик вне панели и кнопки
        if (!sidePanel.contains(event.target) && !favoritesButton.contains(event.target)) {
            sidePanel.classList.remove('active'); // Убираем класс для закрытия
        }
    });

     // Открытие корзины при клике на сердце
     document.getElementById('basket').addEventListener('click', function() {
        const slider = document.getElementById('basket-slider');
        slider.classList.toggle('active'); // Добавляем или удаляем класс для показа слайдера
    }); 
    // Закрытие корзины
    document.addEventListener("click", function(event) {
        const sidePanel = document.getElementById("basket-slider");
        const basketButton = document.getElementById('basket');

        // Проверяем, был ли клик вне панели и кнопки
        if (!sidePanel.contains(event.target) && !basketButton.contains(event.target)) {
            sidePanel.classList.remove('active'); // Убираем класс для закрытия
        }
    });

    //plus - minus (count quantity of bags)

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

    document.querySelectorAll('.submenu a, .dropdown-toggle, .submenu .menu-arrow').forEach(item => {
item.addEventListener('click', function (event) {

    // Сбрасываем цвет для всех пунктов меню
    document.querySelectorAll('.submenu a, .dropdown-toggle, .submenu .menu-arrow').forEach(link => {
        link.style.color = '#494747'; // Исходный цвет для .dropdown-toggle
        if (link.querySelector('.menu-arrow')) {
            link.querySelector('.menu-arrow').style.color = '#E0E0E0'; // Исходный цвет для стрелок
        }
    });

    // Меняем цвет на активный
    this.style.color = '#FF89AA'; // Цвет для активного пункта
    if (this.querySelector('.menu-arrow')) {
        this.querySelector('.menu-arrow').style.color = '#FF89AA'; // Цвет для стрелки активного пункта
    }
});
});

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
toggle.addEventListener('click', function () {
    const dropdown = this.nextElementSibling; // Получаем следующее меню

    // Скрываем другие выпадающие меню
    document.querySelectorAll('.dropdown').forEach(menu => {
        if (menu !== dropdown) {
            menu.style.display = 'none'; // Скрываем, если это не текущее меню
        }
    });

    // Переключаем текущее меню
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        this.classList.remove('active'); // Убираем активный класс
    } else {
        dropdown.style.display = 'block'; // Показываем текущее меню
        this.classList.add('active'); // Добавляем активный класс
    }
});
});

document.querySelectorAll('.auth-button').forEach(button => {
button.addEventListener('click', function () {
    // Сбрасываем стили для всех кнопок
    document.querySelectorAll('.auth-button').forEach(btn => {
        btn.classList.remove('active'); // Убираем активный класс
    });

    // Устанавливаем активный стиль для нажатой кнопки
    this.classList.add('active'); // Добавляем активный класс
});
});

// Скрываем выпадающее меню при нажатии на любой другой пункт меню
document.querySelectorAll('.submenu a').forEach(item => {
item.addEventListener('click', function () {
    // Скрываем все выпадающие меню
    document.querySelectorAll('.dropdown').forEach(menu => {
        menu.style.display = 'none';
    });

    // Убираем активные классы у всех dropdown-toggle
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
});
});

function updateButtonText() {
    const button = document.querySelector('.auth-button.active');
    if (window.innerWidth <= 1440) {
        button.textContent = 'войти |';
    } else {
        button.textContent = 'войти'; // Замените на исходный текст
    }
}

// Обновляем текст при загрузке страницы и изменении размера окна
window.addEventListener('load', updateButtonText);
window.addEventListener('resize', updateButtonText);

/*///////////care html */

document.addEventListener("DOMContentLoaded", function() {
    const bagContainers = document.querySelectorAll('.bag_pictures');

    bagContainers.forEach(bagContainer => {
        const bagsContainer = bagContainer.querySelector('.bags');
        const leftArrow = bagContainer.querySelector('.left-arrow');
        const rightArrow = bagContainer.querySelector('.right-arrow');

        let scrollIndex = 0; // Начальная позиция прокрутки
        const itemsToShow = 4; // Количество элементов, которые показываются
        const totalItems = bagsContainer.querySelectorAll('span').length; // Общее количество элементов
        const itemWidth = bagsContainer.querySelector('span').offsetWidth + 20; // Ширина элемента с учетом отступов

        // Обработчик нажатия на левую стрелку
        leftArrow.addEventListener('click', function() {
            if (scrollIndex > 0) {
                scrollIndex--;
                bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            }
        });
        // Обработчик нажатия на правую стрелку
        rightArrow.addEventListener('click', function() {
            if (scrollIndex < totalItems - itemsToShow) {
                scrollIndex++;
                bagsContainer.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            }
        });

    });
});
/* //////////catalog////////////// */
function toggleFavorite(icon) {
    if (icon.src.includes("Heart-1.png")) {
        icon.src = "../img/Heart.png";
    } else {
        icon.src = "../img/Heart-1.png";
    }
}

document.querySelectorAll(".button-filter button").forEach(button => {
button.addEventListener("click", function() {
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
/*
document.addEventListener("DOMContentLoaded", function() {
let products = document.querySelectorAll(".product-card");
let loadMoreButton = document.querySelector(".load-more");
let visibleCount = 12; // Сколько карточек показываем сначала
let increment = 4; // Сколько карточек добавляем за один клик

loadMoreButton.addEventListener("click", function() {
let nextCount = visibleCount + increment;
for (let i = visibleCount; i < nextCount && i < products.length; i++) {
    products[i].style.display = "block";
}
visibleCount = nextCount;

if (visibleCount >= products.length) {
    loadMoreButton.style.display = "none"; // Скрываем кнопку, если все товары загружены
}
});
});*/

/*///////////dlivery/////////////////// */
function showBlock(blockId) {
    // Скрываем все .content1
    const allBlocks = document.querySelectorAll('.content1');
    allBlocks.forEach(block => {
        block.style.display = 'none';
    });

    // Показываем нужный блок
    if (blockId === 'delivery-payment') {
        document.getElementById('delivery-payment').style.display = 'block';
        document.getElementById('requisites').style.display = 'block'; // Показываем реквизиты тоже
    } else {
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.display = 'block';
        }
    }

    // Обновляем активное состояние кнопок
    const allButtons = document.querySelectorAll('.delivery-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Активируем текущую кнопку
    const triggeringBtn = Array.from(allButtons).find(btn =>
        btn.getAttribute('onclick')?.includes(blockId)
    );
    if (triggeringBtn) {
        triggeringBtn.classList.add('active');
    }
}

// Показываем первый блок по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showBlock('delivery-payment');
});

/*///////////////about us//////////////////*/

 

/*///////////blog/////////////////// */

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("header button");
    const hero = document.querySelector(".hero");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Сброс стилей для всех кнопок
            buttons.forEach(btn => {
                btn.style.backgroundColor = "#FBEBF1";
                btn.style.color = "#FF89AA";
            });

            // Применение активного стиля к нажатой кнопке
            button.style.backgroundColor = "#FF89AA";
            button.style.color = "#FFFFFF";

            // Логика отображения .hero
            if (index === 0) {
                hero.style.display = "block";
            } else {
                hero.style.display = "none";
            }
        });
    });
});

/*///////////catalog/////////////////// */

document.getElementById('filter-label').onclick = function() {
    const slider = document.querySelector('.filters-slider');
    slider.style.display = slider.style.display === 'none' || slider.style.display === '' ? 'block' : 'none';
};

document.querySelector('.filter-close-button').onclick = function() {
    document.querySelector('.filters-slider').style.display = 'none';
};


const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

function updateValues() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

  if (min > max) {
    min = max;
    minRange.value = min;
  }

  if (max < min) {
    max = min;
    maxRange.value = max;
  }

  minValue.textContent = `${min}₽`;
  maxValue.textContent = `${max}₽`;
}

minRange.addEventListener("input", updateValues);
maxRange.addEventListener("input", updateValues);

updateValues();

document.addEventListener("DOMContentLoaded", () => {
 // Добавляем функциональность для кнопок фильтра
 const filterButtons = document.querySelectorAll(".filter-button-container .filter-btn");

 filterButtons.forEach((button) => {
     button.addEventListener("click", () => {
         // Сброс стилей для всех кнопок фильтра
         filterButtons.forEach(btn => {
             btn.style.backgroundColor = "#FBEBF1";
             btn.style.color = "#FF89AA";
         });

         // Применение активного стиля к нажатой кнопке
         button.style.backgroundColor = "#FF89AA";
         button.style.color = "#FFFFFF";
     });
 });
});

/*///////////////////history//////////////////////*/

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".order-history-btn");
    const orderHistory = document.querySelector(".order-history");
  
    if (button && orderHistory) {
      button.addEventListener("click", function () {
        orderHistory.classList.add("show");
      });
    }
  });
  

