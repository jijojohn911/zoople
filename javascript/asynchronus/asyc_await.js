function placeOrder(item){
   return new Promise((resolve, reject) => {
    orderPlaced=true;
    setTimeout(() => {
      if(orderPlaced){
      resolve(`${item} is been ordered `)
    }
    else{
      reject(`You didn't placedorder yet for${item}`)
    }
    },1000);
   })
}

function orderShipping(item){
   return new Promise((resolve,reject)=>{
      ordershipped=true;
      setTimeout(() => {
         if(ordershipped){
            resolve(`${item} has been shipped...`)
         }else{
            reject(`your order ${item} is on way`)
         }
      }, 2000);
   })
}
function orderdelivered(item){
   return new Promise((resolve,reject)=>{
      orderdelivered=true;
    setTimeout(() => {
      if(orderdelivered){
      resolve(`${item} has been delivered...`)
      }else{
        reject( `not delivered yet`)
      }
    }, 3000);
   })
    

}

// placeOrder("laptop")
// .then(function(item){
//    return orderShipping(item)
// })
// .then(function(item){
//    return orderdelivered(item)
// })
// .then(function (result){
//    console.log(result);
// })
// .catch(function(error){
//    console.log(error);
   
// })

async function deliliveryOfItem() {
   try {
    let delivery = await placeOrder("laptop")
    console.log(delivery);
   let shippment = await orderShipping("laptop")
   console.log(shippment);
   let result = await orderdelivered("laptop")
   console.log(result);
   

   } catch (error) {
      console.error(error);
      
   }
}

deliliveryOfItem()



