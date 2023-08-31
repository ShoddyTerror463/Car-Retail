

document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-button");
    const totalElement = document.getElementById("total");
    let totalAmount = 0;

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const price = parseInt(button.getAttribute("data-price"));
            totalAmount += price;
            totalElement.textContent = `$${totalAmount}`;
        });
    });
});










