"use strict";
let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.00
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.00
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy  no experience necessary!",
    location: "145 FM 103",
    price: 145.00
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.00
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.00
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.00
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.00
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.00
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.00
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.00
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.00
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.00
  }
];

window.onload = function () {

  document.getElementById("checkoutForm").style.display = "none";
  document.getElementById("adventureSelect").style.display = "none";
  

  let categorySelect = document.getElementById("categorySelect");
  categorySelect.onchange = categorySelectOnchange;
  let adventureSelect = document.getElementById("adventureSelect");
  adventureSelect.onchange = adventureSelectOnChange;
  let purchaseBtn = document.getElementById("purchaseBtn");
  purchaseBtn.onclick = purchaseBtnOnClick;
  let resetBtn = document.getElementById("resetBtn");
  resetBtn.onclick = resetBtnOnClick;

  populateCategorySelect();

}

//problematically populating option data
function populateCategorySelect(){
 
  let adventureSelect = document.getElementById("adventureSelect");
  adventureSelect.style.display = "none";
  

  const categorySelect = document.getElementById("categorySelect");
  
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Please select a Category!";
  categorySelect.appendChild(defaultOption);
  
  for (let category of categories){
    let newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;
    categorySelect.appendChild(newOption);
  }
}
// append options

function categorySelectOnchange() {
  
  let categorySelect = document.getElementById("categorySelect");
  
  //initialize the adventureSelect by clearing it and addign the first option
  adventureSelect.length = 0
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select and adventure!";
  adventureSelect.appendChild(defaultOption);


  // figure out selected category and get just those adventures from the array
  let selectedCategory = categorySelect.value;
  let activitiesInSelectedCategory = getActivitiesForCategory(activities, selectedCategory);

  //loop through the filtered adventures and add entries to the dropdown..
  let activitiesInSelectedCategoryLength = activitiesInSelectedCategory.length;

  for(let i = 0; i < activitiesInSelectedCategoryLength; i++ ){
     addAdventureToAdventureSelect(activitiesInSelectedCategory[i]);
   }

  // adventureDetailParagraph.innerHTML = "";
    adventureSelect.style.display = "block";

  function addAdventureToAdventureSelect(adventure){
   
    let newOption = document.createElement("option");
    newOption.value = adventure.id;
    newOption.textContent = adventure.name;
    adventureSelect.appendChild(newOption);
  }

}


function adventureSelectOnChange() {
 
  document.getElementById("checkoutResultParagraph").style.display = "none"
 

  let adventureDetailParagraph = document.getElementById("adventureDetailParagraph");
  let adventureSelect = document.getElementById("adventureSelect");
  let checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.style.display = "none";
  adventureDetailParagraph.style.display = "none";

  let selectedAdventureValue = adventureSelect.value;

  if(selectedAdventureValue == undefined || selectedAdventureValue == ""){
          adventureDetailParagraph.innerHTML = ""
          checkoutForm.style.display = "none";
          return;
  }

  let selectedAdventure = getActivityById(activities, selectedAdventureValue);

   adventureDetailParagraph.innerHTML = "You selected : " + selectedAdventure.name + "<br />" + "ID : " + selectedAdventure.id + "<br />" + "Description : " + selectedAdventure.description + "<br />" + "Location : " + selectedAdventure.name + "<br />" + "Price : " + " $ " + selectedAdventure.price;
    
   adventureDetailParagraph.style.display = "block"
 
   if(selectedAdventure.price == 0) {
     checkoutForm.style.display = "none";
   }
   else{
       checkoutForm.style.display = "block";
   }

  return false;

}


function getActivitiesForCategory(activities, category){
  
  let activitieslength = activities.length;
  let result = [];

  for(let i = 0 ; i < activitieslength ; i++){
    if(activities[i].category ==  category){
      result.push(activities[i]);
    }
  }

  return result;
}

function getActivityById(activities, id){
  let length = activities.length;
  for(let i = 0; i < length; i++){
    if(activities[i].id == id){
      return activities[i];
    }
  }
}

//purchase button
function purchaseBtnOnClick() {
  let adventureSelect = document.getElementById("adventureSelect");
  let selectedAdventureValue = adventureSelect.value;
  let selectedAdventure = getActivityById(activities, selectedAdventureValue);
  
  let tickets= document.getElementById("tickets").value;
  
   let total = tickets * selectedAdventure.price;
  
  let checkoutResultParagraph = document.getElementById("checkoutResultParagraph");
  checkoutResultParagraph.style.display = "block"
  checkoutResultParagraph.innerHTML = "Your credit card has been charged $" + total + " for " + tickets + " ticket to " + selectedAdventure.name;

}


//reset button
function resetBtnOnClick() {

  let checkoutResultParagraph = document.getElementById("checkoutResultParagraph");
  checkoutResultParagraph.innerHTML = ""
  checkoutResultParagraph.style.display = "none"

  let tickets= document.getElementById("tickets").value = 1;

}



