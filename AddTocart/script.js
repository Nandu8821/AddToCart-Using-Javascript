let shop = document.querySelector(".shop")
let renderCartData = document.querySelector(".renderCartData")
let dynamic_count = document.querySelector(".dynamic_count");
let cart_item_render = document.querySelector(".cart_item_render");


let arr = [];
let generateShop =async () => {
    

   

   const res = await fetch("https://fakestoreapi.com/products")
  const data= await res.json();

  console.log(data)

  data.map((item)=>{
    let createMainDiv = document.createElement("div")
   let createImgElement = document.createElement("img");
   let createtitle = document.createElement("p");
   let createPrice = document.createElement("p"); 
   let createBtn = document.createElement("button"); 


 let createPriceText = document.createTextNode(`Price : ${item.price}`)
 let createTextTitle = document.createTextNode(item.title.slice(0,30 ))
 let createBtnText = document.createTextNode("Add to cart")



 createBtn.setAttribute("class","btn btn-info Addtocart")
   createImgElement.setAttribute("src", item.image);
   createImgElement.setAttribute("class" , "myImage");
   createMainDiv.setAttribute("class","box-main")
   
   createtitle.appendChild(createTextTitle);
   createPrice.appendChild(createPriceText);
   createBtn.appendChild(createBtnText);
   

   createMainDiv.appendChild(createImgElement);
   createMainDiv.appendChild(createtitle);
   createMainDiv.appendChild(createPrice);
   createMainDiv.appendChild(createBtn);

   shop.append(createMainDiv)

   function addtocart (image,price){
     
    arr.push({m : image , p : price})
 

    
              let cartImgElm = document.createElement("img")
              let crashBtn = document.createElement("button")
              crashBtn.setAttribute("class","fa-solid fa-trash remove_Item")
              cartImgElm.setAttribute("src",image);
              let cartPriceElm = document.createElement("p");
              let cartpriceText = document.createTextNode(price)
              cartImgElm.setAttribute("class","cartimg")
              cartPriceElm.setAttribute("class","cartprice")

              cartPriceElm.appendChild(cartpriceText);
              dynamic_count.innerHTML = arr.length;

              renderCartData.appendChild(cartImgElm);

              renderCartData.appendChild(cartPriceElm);
              renderCartData.appendChild(crashBtn);



   }

   createBtn.addEventListener("click",()=>addtocart(item.image,item.price))}
  
  )}
  

generateShop();