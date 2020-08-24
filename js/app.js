
var products = [
    {
        "name": "sofa",
        "price": "15000",
        "id": 1,
        "desc": " WARRANTY DETAILS - 1 Year Limited Brand Warranty for Manufacturing Defects only. The warranty does not cover damages due to usage of the product beyond its intended use and wear & tear, Improper Installation By Customer. Part replacement will be done if issue found is genuine.",
        "source": "img/sofa.jpg",
    },
    {
        "name": "big sofa",
        "price": "15000",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 2,
        "source": "img/big sofa.jpg",
    },
    {
        "name": "bed",
        "price": "3500",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 3,
        "source": "img/bed.jpg",

    },
    {
        "name": "kitchen set",
        "price": "1588",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 4,
        "source": "img/kitchen set.jpg",

    },
    {
        "name": "dressing table",
        "price": "1534",
        "id": 5,
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "source": "img/dressing table.jpg",

    },
    {
        "name": "dining table",
        "price": "1500",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 6,
        "source": "img/dining table.jpg",

    },
    {
        "name": "big table",
        "price": "1200",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 7,
        "source": "img/big table.jpg",

    },
    {
        "name": "study table",
        "price": "1588",
        "id": 8,
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "source": "img/study table.jpg",

    },
    {
        "name": "chair",
        "price": "3500",
        "desc": "QUALITY - This is spaciously designed with larger depth to allow for broader seating and allowing complete relaxation until the thigh to provide with superb comfort with. The cushions you sit on are firm & Comfortable. This sofa is constructed featuring handpicked Premium fabric for a regal finish. Durable for long term use and held up by Strong legs that last a lifetime.",
        "id": 3,
        "source": "img/chair.jpg",

    }
];

// to load intial all shopping item
function loadHtml(products) {
    let prod;
    fetch('Items.json')
        .then(response => response.json())
        .then(data => {
            prod = data;
            console.log("inside loop" + prod)
        });

    products.forEach(function (item) {
        const list = document.createElement('div');
        list.classList.add('col-10', 'col-sm-6', 'col-lg-4', 'mx-auto', 'my-3')

        list.innerHTML = `<div class="card ">
              <div class="img-container" id=${item.id}>
                <img src="${item.source}" width="100%;" height="250px" alt="">
               
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-between text-capitalize">
                  <h5 id="store-item-name">${item.name}</h5>
                  <h5 class="store-item-value"> <strong id="store-item-price" class="font-weight-bold">${item.price}</strong></h5>
  
                </div>
                <div class="store-item-icon">
                 <span >☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                <ion-icon name="cart" size="large"></ion-icon>
                </div>
              </div>
  
  
            </div>
          `

        const storeItem = document.getElementById("store-items");
        const container = document.querySelector(".container");
        if (storeItem != null) {
            storeItem.insertBefore(list, container.nextSibling);
        }


    });

};
loadHtml(products);



//Logic to selected cart item in localstorage
(function () {

    const addToCart = document.querySelectorAll('.store-item-icon');
    addToCart.forEach(function (Item) {
        Item.addEventListener('click', function (event) {
            let fullpath = event.target.parentElement.parentElement.previousElementSibling.firstChild.nextElementSibling.src;
            let position = fullpath.indexOf('img') + 3;
            path = fullpath.slice(position);
            console.log(path);
            let name = event.target.parentElement.parentElement.children[0].children[0].textContent;
            let price = event.target.parentElement.parentElement.children[0].children[1].textContent;
            if (localStorage.getItem("cartItem") != null && localStorage.getItem("cartItem") !== "") {
                var item = JSON.parse(localStorage.getItem("cartItem"));
                item.push({ "path": 'cart-img' + path, "name": name, "price": price })
            } else {
                var item = [];
                item.push({ "path": 'cart-img' + path, "name": name, "price": price })
            }

            localStorage.setItem("cartItem", JSON.stringify(item))

            alert("Item successfully added to cart. To view item please check cart")


        });
    })

})();

//to show model/item detail after img click
(function () {

    const imgClick = document.querySelectorAll('.img-container');
    imgClick.forEach(function (Item) {
        Item.addEventListener('click', function (event) {
            var id = event.target.parentElement.parentElement.children[0].id;
            var showDes = products.filter(Item => Item.id == id);
            showDes = showDes[0];
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            const div = document.querySelector('.col-12');
            if (div != null) {
                div.innerHTML = ``;
            }

            const list = document.createElement('div');
            list.classList.add('col-12')
            list.innerHTML = ``;
            list.innerHTML = ` <div class="row">
      <div class="col-6  img-container"><img src="${showDes.source}" width="100%" height="100%"></div>
      <div class="col-6 "><span>${showDes.desc}</span></div>
    
      <!-- Force next columns to break to new line at md breakpoint and up -->
      <div class="w-100 d-none d-md-block"></div>
      <hr>

      <div class="col-6  "><h5 id="store-item-name">${showDes.name}</h5></div>
      <div class="col-6 "><h5 id="store-item-name">Price - ${showDes.price}</h5></div>
    </div>`;
            const model = document.getElementById("modal-content");
            const containers = document.querySelector(".modal-data");
            if (model != null) {
                model.insertBefore(list, containers.nextSibling);
            }
        });
    })

})();

// to show to all added item in cart
(function () {

    var item;
    if (localStorage.getItem("cartItem") != null && localStorage.getItem("cartItem") != "") {
        item = JSON.parse(localStorage.getItem("cartItem"));
        item.forEach(function (item) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3')

            cartItem.innerHTML = `
              <img src="${item.path}" width="150px" height="100px" alt="">
              <div class="item-text">
      
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
              </div>
            `


            const cart = document.getElementById("cart");
            const total = document.querySelector(".cart-total-container");
            if (cart != null) {
                cart.insertBefore(cartItem, total);
            }

        });
        showTotal();
    }



})();

// show total price in cart
function showTotal() {
    var total = 0;
    const item = JSON.parse(localStorage.getItem("cartItem"));
    item.forEach(item => {
        total += parseInt(item.price);
    })

    if (document.getElementById('cart-total') != null) {
        document.getElementById('cart-total').textContent = total;

    }


}

// to clear cart items
const clearCart = document.getElementById('clear-cart');
if (clearCart != null) {
    clearCart.addEventListener('click', function (event) {
        clearCartitems();
    });
}

function clearCartitems() {
    localStorage.setItem("cartItem", "")
    alert("Cart is cleared , please refresh application to check updated chart")
}

//to search items in shop
function search() {
    var input, filter, searchItem = [];
    input = document.getElementById("search-item");
    filter = input.value.toLowerCase();
    console.log("filter " + filter);
    products.forEach((item, index) => {
        console.log("filter " + filter + "" + item.name.indexOf(filter));
        if (item.name.indexOf(filter) != -1) {
            searchItem.push(item);
            const storeItem = document.getElementById("store-items");
            storeItem.innerHTML = ""
            loadHtml(searchItem);
        }
    })
}
// autoload shopping page if user clears search box
function autoLoad() {
    var input, filter, searchItem = [];
    input = document.getElementById("search-item");
    filter = input.value;
    if (filter == "") {
        loadHtml(products);
    }
}
//login
function logIn() {
    alert("logged in successfully");
}

// When the user clicks on <span> (x), close the modal
function closeModel() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}












