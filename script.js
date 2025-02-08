document.addEventListener("DOMContentLoaded", function () {
    alert("Вітаємо на сайті");

    // Додавання поля пошуку
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Пошук товарів...");
    searchInput.classList.add("search-box");
    document.querySelector("#items").prepend(searchInput);

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll(".item").forEach((item) => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            item.style.display = title.includes(filter) ? "block" : "none";
        });
    });

    // Додавання товарів
    const products = [
        {
            title: "Сукня",
            description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, є недоліки, можу віддати безкоштовно",
            price: "50 грн",
            images: ["image/IMG_0167.jpeg", "image/IMG_0168.jpeg"],
        },
        {
            title: "Спідниця+боді",
            description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю",
            price: "170 грн",
            images: ["image/IMG_0171.jpeg", "image/IMG_0172.jpeg"],
        },
    ];

    const container = document.querySelector(".items-container");
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector("#modalImage");
    let currentImageIndex = 0;
    let currentProductImages = [];

    // Відкрити модальне вікно
    function openModal(images, index) {
        currentProductImages = images;
        currentImageIndex = index;
        modal.style.display = "flex";
        modalImage.src = currentProductImages[currentImageIndex];
    }

    // Закрити модальне вікно
    window.closeModal = function () {
        modal.style.display = "none";
    };

    // Перемикання фото
    window.changeSlide = function (direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = currentProductImages.length - 1;
        } else if (currentImageIndex >= currentProductImages.length) {
            currentImageIndex = 0;
        }
        modalImage.src = currentProductImages[currentImageIndex];
    };

    products.forEach((product) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}" onclick="openModal(${JSON.stringify(
            product.images
        )}, 0)">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#contact" class="button">Зв'язатися</a>
        `;
        container.appendChild(item);
    });

    // Додати елементи управління
    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.innerHTML = `
        <span class="prev" onclick="changeSlide(-1)">&#10094;</span>
        <span class="next" onclick="changeSlide(1)">&#10095;</span>
    `;
    modal.appendChild(controls);
});
