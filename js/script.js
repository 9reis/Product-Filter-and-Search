  let products = {
    data: [
        {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "img/white-tshirt.jpg"
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "img/short-skirt.jpg"
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "img/sporty-smartwatch.jpg"
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "img/Knitted-top.jpg"
    },    
    {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "img/black-leather-jacket.jpg"
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "img/pink-trousers.jpg"
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "img/brown-jacket.jpg"
    },
    {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "img/comfy-gray-pants.jpg"
    },
    ]
  };

  for( let i of products.data){
    //Create Cart
    let card = document.createElement("div")
    //Carc should have category and should stay hidden initially
    card.classList.add("card", i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //Container 
    let container = document.createElement("div")
    container.classList.add("container")

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //Price 
    let price = document.createElement('h6')
    price.innerText = "$ " + i.price;
    container.appendChild(price)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }

  //Parameter passed from button (Parameter same as category) 
  function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button)=>{
        //Check if values iquals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else {
            button.classList.remove("active");
        }
    })

    //Select all cards 
    let elements = document.querySelectorAll('.card');
    //loop through all cards 
    elements.forEach((element) =>{
        //Display all cards on "all" button click 
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            //Check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove('hide');
            }else{
                //hide otger elements
                element.classList.add("hide")
            }
        }
    })
  }

  //Search button click 
  document.getElementById("search").addEventListener("click",() => {
    //Initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element,index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //Display matching card
            cards[index].classList.remove("hide")
        }else {
            //hide other 
            cards[index].classList.add("hide")
        }
    })
  })


  //Initially display all Products

  window.onload = () =>{
    filterProduct('all')
  }









