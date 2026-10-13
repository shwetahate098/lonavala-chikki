// [name, price per 250 g in rupees, swatch colour]
export const MENU = {
  Classic: [["Peanut",60,"#C98B3E"],["Sesame (til)",70,"#E8DCC0"],["Jaggery peanut",65,"#8A4513"],["Coconut",75,"#F4EEDF"],["Puffed rice",55,"#E9C98A"],["Rajgira",70,"#B87A3C"],["Roasted chana",60,"#D4A55A"],["Flax seed",80,"#6B3F1F"]],
  "Dry fruit": [["Cashew",140,"#EBC986"],["Almond",150,"#C9A06A"],["Pistachio",170,"#8DB06A"],["Mixed dry fruit",160,"#B8793A"],["Dates and anjeer",130,"#7A3B1D"],["Cranberry raisin",120,"#A8324A"]],
  Chocolate: [["Milk choco peanut",110,"#6F3A1E"],["Dark choco almond",160,"#3B1F14"],["Choco cashew",155,"#5B2E19"],["White chocolate",120,"#F6EBCF"],["Choco chip",110,"#4A2616"],["Hazelnut choco",170,"#7B4B2A"],["Choco coffee",130,"#4F3223"]],
  Fruity: [["Mango",90,"#F3A71C"],["Strawberry",90,"#D9475E"],["Orange",85,"#EE7B22"],["Pineapple",85,"#E9C93A"],["Blueberry",100,"#4C4A8F"],["Tutti frutti",85,"#D96BA0"],["Rose",90,"#E58AA8"],["Kesar elaichi",110,"#E3A32E"],["Paan",95,"#4E7E3E"],["Butterscotch",95,"#D99A3B"]],
  "Snap crunch": [["Salted caramel",120,"#B5702A"],["Peri-peri",100,"#C8381F"],["Masala",90,"#C9742B"],["Cheese",100,"#F0C040"],["Chilli garlic",95,"#B22A1A"],["Tangy tomato",95,"#D4452E"],["Jalapeño",100,"#5E8A3A"],["Honey roasted",110,"#D9A230"]],
  Healthy: [["Sugar-free dates",120,"#6B3A22"],["Protein chikki",140,"#8E6A3E"],["Ragi millet",90,"#6D4A32"],["Jowar millet",90,"#CDB27A"]],
};

export const PRODUCTS = Object.entries(MENU).flatMap(([category, list]) =>
  list.map(([name, price, color]) => ({ category, name, price, color }))
);
