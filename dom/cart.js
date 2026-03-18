
let products = [
    { name: "shoes", price: 2500 },
    { name: "bag", price: 1500 },
    { name: "cap", price: 800 }
]

let container = document.getElementById("container");
products.forEach((item) => {
    let card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.margin = "10px";
    card.style.padding = "10px";

    let title = document.createElement("h3");
    title.textContent = item.name;


    let price = document.createElement("p");
    price.innerText = item.price;
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card)
})



// let cart=[
//     {}
// ]
// let container=document.getElementById("container");
