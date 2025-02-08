document.addEventListener("DOMContentLoaded", function () {
    alert("Вітаємо на сайті!");

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
            images: ["image/IMG_0167.jpeg", "image/IMG_0168.jpeg"]
        },
        {
            title: "Спідниця+боді",
            description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю",
            price: "170 грн",
            images: ["image/IMG_0171.jpeg"]
        }
        // Інші товари...
    ];

    const container = document.querySelector(".items-container");
    products.forEach((product, index) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}" onclick="openImageModal(${index}, 0)">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#contact" class="button">Зв'язатися</a>
        `;
        container.appendChild(item);
    });

    // Динамічний контент модального вікна
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    let currentProductIndex = 0;
    let currentImageIndex = 0;

    window.openImageModal = function (productIndex, imageIndex) {
        currentProductIndex = productIndex;
        currentImageIndex = imageIndex;
        modalImage.src = products[productIndex].images[imageIndex];
        imageModal.style.display = "block";
    };

    window.closeImageModal = function () {
        imageModal.style.display = "none";
    };

    window.changeModalImage = function (direction) {
        currentImageIndex += direction;
        const productImages = products[currentProductIndex].images;
        if (currentImageIndex < 0) {
            currentImageIndex = productImages.length - 1;
        } else if (currentImageIndex >= productImages.length) {
            currentImageIndex = 0;
        }
        modalImage.src = productImages[currentImageIndex];
    };
});
