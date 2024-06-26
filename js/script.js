window.addEventListener("DOMContentLoaded", () => {
  let openBtn = document.querySelector(".open"),
    products = document.querySelectorAll(".product"),
    buttons = document.querySelectorAll("button");

  let cart = document.createElement("div"),
    field = document.createElement("div"),
    heading = document.createElement("h2"),
    closeBtn = document.createElement("button");

  function createCart() {
    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    heading.textContent = "в нашей корзине";
    closeBtn.textContent = "закрит";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }
  createCart();

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
      let cloneItem = products[i].cloneNode(true),
        btn = cloneItem.querySelector("button");

      btn.remove();
      field.appendChild(cloneItem);
      products[i].remove();
    });
  });
});
