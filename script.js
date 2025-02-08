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
        { title: "Сукня", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, є недоліки, можу віддати безкоштовно", price: "50 грн", image: "image/IMG_0167.jpeg", image: "image/IMG_0168.jpeg" },
        { title: "Спідниця+боді", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "170 грн", image: "image/IMG_0171.jpeg"},
		{ title: "Кофточка чорна", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "70 грн", image: "image/IMG_0176.jpeg" },
		{ title: "Кофточка сіра ", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "70 грн", image: "image/IMG_0178.jpeg" },
		{ title: "Кофточка темно-сіра", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "70 грн", image: "image/IMG_0180.jpeg"},
		{ title: "Шляпа", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір ?, стан люкс, можу віддати безкоштовно", price: "50 грн", image: "image/IMG_0182.jpeg" },
		{ title: "Сукня", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "100 грн", image: "image/IMG_0183.jpeg" },
		{ title: "Сукня", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, розмір S, стан люкс, продаю", price: "80 грн", image: "image/IMG_0186.jpeg" },
		{ title: "Роутер", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, стан люкс, продаю", price: "300 грн", image: "image/IMG_0187.jpeg" },
		{ title: "Куртка TNF", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, стан люкс, продаю", price: "Договірна", image: "image/titov1.jpg" },
		{ title: "Джинси", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, стан люкс, продаю", price: "Договірна", image: "image/titov3.jpg" },
		{ title: "Шорти джинсові", description: "Опис товару та більше фото в особистих повідомленнях у вкладці зв'язок, стан люкс, продаю", price: "Договірна", image: "image/titov2.jpg" },
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
