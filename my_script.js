var acc = document.getElementsByClassName("accordion");
var i;
const bestSeller = [
  {
    "strMeal": "BBQ Pork Sloppy Joes",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    "idMeal": "52995",
    "price": "10"
  },
  {
    "strMeal": "Bread and Butter Pudding",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    "idMeal": "52792",
    "price": "15"
  },
  {
    "strMeal": "Chilli prawn linguine",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    "idMeal": "52839",
    "price": "12"
  },
  {
    "strMeal": "Chivito uruguayo",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
    "idMeal": "53063",
    "price": "15.5"
  },
]
loadDocument();
function loadDocument() {
  loadAccordion();
  loadBestSeller();
}
function loadAccordion() {
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

function loadBestSeller () {
  var items = document.getElementById("meal-details");
  let html = "";
  if(bestSeller.length > 0) {
    bestSeller.forEach(meal => {
      html += `
      <div class="shop-items">
              <div class="shop-item">
                  <span class="shop-item-title">${meal.strMeal}</span>
                  <img class="shop-item-image" src=${meal.strMealThumb}>
                  <div class="shop-item-details">
                      <span class="shop-item-price">$${meal.price}</span>
                      <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                  </div>
              </div>             
      </div>`
  });
  }
  items.innerHTML = html;
}
