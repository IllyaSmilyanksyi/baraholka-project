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
    const modal = document.getElementById("modal");
    const carousel = document.getElementById("carousel");
    let currentSlide = 0;

    // Функція для створення товару
    products.forEach((product, index) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button onclick="openModal(${index})">Переглянути</button>
        `;
        container.appendChild(item);
    });

    // Відкрити модальне вікно
    window.openModal = function (productIndex) {
        const product = products[productIndex];
        carousel.innerHTML = product.images.map((img, idx) => `<img src="${img}" class="${idx === 0 ? "active" : ""}">`).join("");
        currentSlide = 0;
        modal.style.display = "block";
    };

    // Закрити модальне вікно
    window.closeModal = function () {
        modal.style.display = "none";
    };

    // Перемикання слайдів
    window.changeSlide = function (step) {
        const slides = carousel.querySelectorAll("img");
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    };
});
