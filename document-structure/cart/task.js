// Create HTML element from product params
function createCartProduct(dataId, imgSrc, count) {
    const cartEl = document.createElement("div");
    cartEl.classList.add("cart__product");
    cartEl.setAttribute("data-id", dataId);
    cartEl.innerHTML = `<img class="cart__product-image" src=${imgSrc}>
    <div class="cart__product-count">${count}</div>`;

    return cartEl;
};

// Main DOM references
const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart__products");

// Proccessing every .product element
for (let idx = 0; idx < products.length; idx++) {
    const controls = products[idx].querySelectorAll(".product__quantity-control");
    const quantity = products[idx].querySelector(".product__quantity-value");
    const button = products[idx].querySelector(".product__add");

    // Proccessing every .control element
    for (let idx2 = 0; idx2 < controls.length; idx2++) {
        controls[idx2].onclick = () => {
            let currQuantity = Number(quantity.textContent);

            if (controls[idx2].classList.contains("product__quantity-control_inc")) {
                currQuantity++;
                quantity.textContent = String(currQuantity);
            } else {
                if (Number(quantity.textContent > 1)) {
                    currQuantity--;
                    quantity.textContent = String(currQuantity);
                };
            };
        };
    };

    // Event for cart button
    button.onclick = () => {
        const dataId = products[idx].getAttribute("data-id");
        const cartProducts = Array.from(cart.querySelectorAll(".cart__product"));

        // Searching for product
        const productInCart = cartProducts.find((el) => {
            return el.getAttribute("data-id") == dataId;
        });

        // Proccess event
        if (productInCart) {
            const count = productInCart.querySelector(".cart__product-count");
            count.textContent = String(Number(count.textContent) + Number(quantity.textContent));
        } else {
            const productImg = products[idx].getElementsByTagName("img")[0];
            cart.appendChild(createCartProduct(dataId, productImg.getAttribute("src"), quantity.textContent));
        };
    };
};
