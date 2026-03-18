const orders = [
  { id: 1, customer: "Ali", total: 4500, status: "Delivered" },
  { id: 2, customer: "Sara", total: 1200, status: "Pending" },
  { id: 3, customer: "John", total: 6700, status: "Delivered" },
  { id: 4, customer: "Zara", total: 3000, status: "cancelled" }
];

const container = document.getElementById("orderContainer");

const deliveredOrders = orders.filter(order => order.status === "Delivered");

  deliveredOrders.forEach(item=>{
   let card =document.createElement("div");
   card.style.border="2px solid black";
   card.style.margin="10px";
   card.style.padding="10px"
   card.style.backgroundColor="white";
   card.style.width="200px"

   let customer=document.createElement("h3");
   customer.textContent=`order ID: ${item.customer}`;

   let amount=document.createElement("p");
   amount.textContent=`Total Amount: ${item.total}`;

   let status=document.createElement("p");
   status.textContent=`status: ${item.status}`;
    status.style.color = "green";

    card.appendChild(customer)
     card.appendChild(amount)
      card.appendChild(status)
       container.appendChild(card)


})
      





// // Display only delivered items
// deliveredOrders.forEach((item) => {
//     let card = document.createElement("div");
//     card.style.border = "1px solid black";
//     card.style.margin = "10px";
//     card.style.padding = "10px";
//     card.style.borderRadius = "5px";
//     card.style.backgroundColor = "#f9f9f9";

//     let customer = document.createElement("h3");
//     customer.textContent = `Customer: ${item.customer}`;
    
//     let orderId = document.createElement("p");
//     orderId.textContent = `Order ID: ${item.id}`;
    
//     let total = document.createElement("p");
//     total.textContent = `Total: RS.${item.total}`;
    
//     let status = document.createElement("p");
//     status.textContent = `Status: ${item.status}`;
//     status.style.color = "green";
//     status.style.fontWeight = "bold";

//     card.appendChild(customer);
//     card.appendChild(orderId);
//     card.appendChild(total);
//     card.appendChild(status);
    
//     container.appendChild(card);
// });














































   