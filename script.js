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
        { title: "Сукня", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, є недоліки, можу віддати безкоштовно", price: "50 грн", image: "image/IMG_0167.jpeg" },
        { title: "Спідниця+боді", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "170 грн", image: "image/IMG_0171.jpeg" },
        // Інші товари...
    ];

    const container = document.querySelector(".items-container");
    products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <img src="${product.image}" alt="${product.title}" onclick="openImageModal('${product.image}')">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#contact" class="button">Зв'язатися</a>
        `;
        container.appendChild(item);
    });

    // Функції для модального вікна
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "image-modal";
    modal.innerHTML = `
        <span class="close-modal" onclick="closeImageModal()">&times;</span>
        <img class="modal-content" id="modalImage" src="">
    `;
    document.body.appendChild(modal);

    window.openImageModal = function (imageSrc) {
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        modal.style.display = "block";
        modalImage.src = imageSrc;
    };

    window.closeImageModal = function () {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none";
    };
});
