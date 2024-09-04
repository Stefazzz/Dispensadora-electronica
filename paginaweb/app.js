const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-MX",
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
    const orderData = {
        title: document.querySelector(."name").innerText,
        quanty: 1,
        price: 5000,
    };

    const response = await fetch("http://localhost:3000/create-preference", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body
    });
});