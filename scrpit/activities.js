"use strict";

let activities = [
  {
    name: ""
  },
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

  document.getElementById("list").style.display = "none";
  let category = document.getElementById("category");
  category.onchange = activity;
  let list = document.getElementById("list");
  list.onchange = displayActivity;
  

}

function activity() {

  document.getElementById("list").style.display = "none";
  let category = document.getElementById("category");
  let list = document.getElementById("list");
  let para = document.getElementById("para");

  let index = category.selectedIndex;
  let length = activities.length
  list.length = 0


  if (index == 1) {
   
    let options = document.createElement("option");
    options.text = "Select an adventure";
    list.appendChild(options);

    for (let i = 0; i < length; i++) {

      if (activities[i].category == "Adventures") {

        let options = document.createElement("option");

        options.text = activities[i].name;
        options.id = activities[i].id;
        options.name = activities[i].location;
        options.price = activities[i].price;
        options.description = activities[i].description;

        list.appendChild(options);
      }

    }
    list.style.display = "block"


  } else if (index == 2) {

    let options = document.createElement("option");
    options.text = "Select an Arts and Crafts";
    list.appendChild(options);

    for (let i = 0; i < length; i++) {


      if (activities[i].category == "Arts & Crafts") {

        
        let options = document.createElement("option");

        options.text = activities[i].name;
        options.id = activities[i].id;
        options.name = activities[i].location;
        options.price = activities[i].price;
        options.description = activities[i].description;

        list.appendChild(options);

      }

    }

    list.style.display = "block";


  } else if (index == 3) {

    let options = document.createElement("option");
    options.text = "Select a Museum";
    list.appendChild(options);

    for (let i = 0; i < length; i++) {

      if (activities[i].category == "Museums") {

        let options = document.createElement("option");

        options.text = activities[i].name;
        options.id = activities[i].id;
        options.name = activities[i].location;
        options.price = activities[i].price;
        options.description = activities[i].description;

        list.appendChild(options);

      }

    }

    list.style.display = "block";

  } else if (index == 4) {
    let options = document.createElement("option");
    options.text = "Select a Wine Tasting";
    list.appendChild(options);

    for (let i = 0; i < length; i++) {

      if (activities[i].category == "Wine Tastings") {

        let options = document.createElement("option");

        options.text = activities[i].name;
        options.id = activities[i].id;
        options.name = activities[i].location;
        options.price = activities[i].price;
        options.description = activities[i].description;

        list.appendChild(options);

      }

    }

    list.style.display = "block";

  } else if (index == 5) {

    let options = document.createElement("option");
    options.text = "Select Other";
    list.appendChild(options);

    for (let i = 0; i < length; i++) {

      if (activities[i].category == "Other") {

        let options = document.createElement("option");

        options.text = activities[i].name;
        options.id = activities[i].id;
        options.name = activities[i].location;
        options.price = activities[i].price;
        options.description = activities[i].description;

        list.appendChild(options);
      }
    }

    list.style.display = "block";

  } else {
 
    para.innerHTML = "";
  }
}

function displayActivity() {
  document.getElementById("para").style.display = "none";
  let category = document.getElementById("category");
  let para = document.getElementById("para");
  let list = document.getElementById("list");
  let k = 0;

  if (category.selectedIndex == 2) {
    k = 3;
  } else if (category.selectedIndex == 3) {
    k = 5
  } else if (category.selectedIndex == 4) {
    k = 8
  } else if (category.selectedIndex == 5) {
    k = 10
  }
  
  for (let i = k; i < list.length + k; i++) {
    
    if (list.value == activities[i].name) {
      
      para.innerHTML = "You selected : " + list[i - k].text + "<br />" + "ID : " +list[i - k].id  + "<br />"  + "Description : " + list[i - k].description + "<br />" + "Location : " + list[i - k].name + "<br />" + "Price : " + " $ " + list[i - k].price ;
      para.style.display = "block"

    }else if(list.value == ""){
      para.innerHTML = ""
    }
  

  }
  return false;

}




