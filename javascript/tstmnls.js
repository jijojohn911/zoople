let testmon=[
    {name:"Aisha",coment:"this course changed my career",rating:"rating:"+5},
    {name:"Rahul",coment:"very clear explanation and practice",rating:"rating:"+4},
    {name:"Sara",coment:"best learning experince" ,rating:"rating:"+5}
] 
  let container=document.getElementById("container");
  testmon.forEach((review)=>{
    let card=document.createElement("div");
    card.style.border="2px solid black";
    card.style.padding="10px";
    card.style.margin="10px";
    card.style.backgroundColor="lightblue";
    card.style.width="200px";
    

    let title=document.createElement("h3");
    title.textContent=review.name;

    let bdy=document.createElement("p");
    bdy.textContent=review.coment;

    let rate=document.createElement("p");
     rate.innerHTML=`rating: ${review.rating}  <i class="fa-solid fa-star" style="color:gold";></i>`
      
     card.appendChild(title);
      card.appendChild(bdy);
       card.appendChild(rate);

       container.appendChild(card)
  })

 