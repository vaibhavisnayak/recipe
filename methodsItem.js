window.addEventListener('load' ,() =>{
    let val = sessionStorage.getItem('value')


    if(val=='redPasta'){
        var pasta = {
            title: "Red Sauce Pasta",
            time: 30,
            serving: 4,
            calories: 400,
            description: "A delicious Italian pasta tossed in a tangy tomato sauce with garlic, herbs, and a hint of spice.",
            ingredients: [
              "200g pasta",
              "2 cups tomato sauce",
              "1 onion, chopped",
              "3 garlic cloves, minced",
              "1 tsp red chili flakes",
              "2 tbsp olive oil",
              "Salt to taste",
              "Fresh basil leaves"
            ],
            directions: [
              "Boil the pasta as per the instructions on the package.",
              "In a pan, heat olive oil and sauté the onions and garlic until translucent.",
              "Add the tomato sauce, chili flakes, and salt. Let it simmer for 10 minutes.",
              "Mix the boiled pasta with the sauce and cook for another 5 minutes.",
              "Garnish with fresh basil leaves and serve hot."
            ]
          };

        document.getElementById("recipe-image").src = "./images/img1.png"; 
        document.getElementById('rec-title').innerHTML = `${pasta.title}`;
        document.getElementById('serve').innerHTML = `${pasta.serving}`;
        document.getElementById('time').innerHTML =`${pasta.time}`;
        document.getElementById('calories').innerHTML =`${pasta.calories}`;
        document.getElementById('recipe-subtitle').innerHTML =`${pasta.description}`;
        
        var ingList = document.getElementById('ingre-list');
        var ingredients = pasta.ingredients;
        
       
        ingredients.forEach((ingredient) => {
            var node = document.createTextNode(ingredient); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            ingList.appendChild(element); 
        });

        var directions = pasta.directions;
        var direcList = document.getElementById('direc-list');
        directions.forEach((direction) => {
            var node = document.createTextNode(direction); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            direcList.appendChild(element); 
        });

    }

    else if(val == 'briocheToast'){

        var Btoast={
            title: "Brioche Toast",
    time: 15,
    serving: 2,
    calories: 300,
    description: "Rich and buttery brioche bread toasted to perfection, served with your choice of toppings like fruits, honey, or jam.",
    ingredients: [
      "4 slices brioche bread",
      "2 tbsp butter",
      "Honey or jam (optional)",
      "Fresh fruits for topping"
    ],
    directions: [
      "Heat a pan over medium heat and add butter.",
      "Toast the brioche bread slices until golden brown on both sides.",
      "Serve with honey, jam, or fresh fruits as desired."
    ]
        }
        document.getElementById("recipe-image").src = "./images/brioche.png"; 
        document.getElementById('rec-title').innerHTML = `${Btoast.title}`;
        document.getElementById('serve').innerHTML = `${Btoast.serving}`;
        document.getElementById('time').innerHTML =`${Btoast.time}`;
        document.getElementById('calories').innerHTML =`${Btoast.calories}`;
        document.getElementById('recipe-subtitle').innerHTML =`${Btoast.description}`;
        
        var ingList = document.getElementById('ingre-list');
        var ingredients = Btoast.ingredients;
        
       
        ingredients.forEach((ingredient) => {
            var node = document.createTextNode(ingredient); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            ingList.appendChild(element); 
        });

        var directions = Btoast.directions;
        var direcList = document.getElementById('direc-list');
        directions.forEach((direction) => {
            var node = document.createTextNode(direction); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            direcList.appendChild(element); 
        });
    }

    else if(val == 'eggsBenedict'){

       

        var eb = {
            title: "Eggs Benedict",
            time: 20,
            serving: 2,
            calories: 500,
            description: "Classic brunch dish with poached eggs, Canadian bacon, and hollandaise sauce served on an English muffin.",
            ingredients: [
              "2 English muffins",
              "4 eggs",
              "4 slices Canadian bacon",
              "Hollandaise sauce",
              "Fresh chives (for garnish)"
            ],
            directions: [
              "Toast the English muffins and set aside.",
              "Poach the eggs in simmering water for 3-4 minutes.",
              "In a pan, cook the Canadian bacon until heated through.",
              "Assemble the dish by placing bacon on the toasted muffins, followed by the poached eggs, and drizzle with hollandaise sauce.",
              "Garnish with fresh chives and serve immediately."
            ]
          };
          document.getElementById("recipe-image").src = "./images/pexels-brettjordan-2297961.jpg"; 
          document.getElementById('rec-title').innerHTML = `${eb.title}`;
          document.getElementById('serve').innerHTML = `${eb.serving}`;
          document.getElementById('time').innerHTML =`${eb.time}`;
          document.getElementById('calories').innerHTML =`${eb.calories}`;
          document.getElementById('recipe-subtitle').innerHTML =`${eb.description}`;
          
          var ingList = document.getElementById('ingre-list');
          var ingredients = eb.ingredients;
          
         
          ingredients.forEach((ingredient) => {
              var node = document.createTextNode(ingredient); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              ingList.appendChild(element); 
          });
  
          var directions = eb.directions;
          var direcList = document.getElementById('direc-list');
          directions.forEach((direction) => {
              var node = document.createTextNode(direction); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              direcList.appendChild(element); 
          });
    }

    else if(val == 'acaiBowl'){
        var ab={
            title: "Acai Bowl",
            time: 10,
            serving: 1,
            calories: 250,
            description: "A refreshing and nutritious bowl made with acai berries, topped with fresh fruits, granola, and a drizzle of honey.",
            ingredients: [
              "1 frozen acai packet",
              "1/2 banana",
              "1/2 cup almond milk",
              "Fresh fruits (strawberries, blueberries, etc.)",
              "Granola",
              "Honey"
            ],
            directions: [
              "Blend the acai packet, banana, and almond milk until smooth.",
              "Pour into a bowl and top with fresh fruits, granola, and a drizzle of honey."
            ]
          };
          document.getElementById("recipe-image").src = "./images/pexels-janetrangdoan-1099680.jpg"; 
          document.getElementById('rec-title').innerHTML = `${ab.title}`;
          document.getElementById('serve').innerHTML = `${ab.serving}`;
          document.getElementById('time').innerHTML =`${ab.time}`;
          document.getElementById('calories').innerHTML =`${ab.calories}`;
          document.getElementById('recipe-subtitle').innerHTML =`${ab.description}`;
          
          var ingList = document.getElementById('ingre-list');
          var ingredients = ab.ingredients;
          
         
          ingredients.forEach((ingredient) => {
              var node = document.createTextNode(ingredient); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              ingList.appendChild(element); 
          });
  
          var directions = ab.directions;
          var direcList = document.getElementById('direc-list');
          directions.forEach((direction) => {
              var node = document.createTextNode(direction); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              direcList.appendChild(element); 
          });
    }

    else if(val == 'caesarSalad'){
        var casd={
            title: "Caesar Salad",
            time: 15,
            serving: 4,
            calories: 350,
            description: "A crunchy, classic Caesar salad with romaine lettuce, croutons, Parmesan cheese, and a creamy Caesar dressing.",
            ingredients: [
              "1 head romaine lettuce",
              "1/2 cup croutons",
              "1/4 cup Parmesan cheese, grated",
              "Caesar dressing",
              "Freshly ground black pepper"
            ],
            directions: [
              "Chop the romaine lettuce into bite-sized pieces.",
              "In a large bowl, toss the lettuce with Caesar dressing until evenly coated.",
              "Top with croutons, grated Parmesan cheese, and freshly ground black pepper."
            ]
          };
        document.getElementById("recipe-image").src = "./images/pexels-iina-luoto-460132-1211887.jpg"; 
          document.getElementById('rec-title').innerHTML = `${casd.title}`;
          document.getElementById('serve').innerHTML = `${casd.serving}`;
          document.getElementById('time').innerHTML =`${casd.time}`;
          document.getElementById('calories').innerHTML =`${casd.calories}`;
          document.getElementById('recipe-subtitle').innerHTML =`${casd.description}`;
          
          var ingList = document.getElementById('ingre-list');
          var ingredients = casd.ingredients;
          
         
          ingredients.forEach((ingredient) => {
              var node = document.createTextNode(ingredient); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              ingList.appendChild(element); 
          });
  
          var directions = casd.directions;
          var direcList = document.getElementById('direc-list');
          directions.forEach((direction) => {
              var node = document.createTextNode(direction); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              direcList.appendChild(element); 
          });
    }
    
    else if(val == 'cobbSalad'){

        var cs ={
            title: "Cobb Salad",
            time: 20,
            serving: 2,
            calories: 600,
            description: "A hearty salad featuring mixed greens, grilled chicken, bacon, hard-boiled eggs, avocado, and a tangy vinaigrette.",
            ingredients: [
              "Mixed salad greens",
              "1 grilled chicken breast, sliced",
              "2 hard-boiled eggs, chopped",
              "4 strips of cooked bacon, chopped",
              "1 avocado, sliced",
              "1/2 cup blue cheese, crumbled",
              "Vinaigrette dressing"
            ],
            directions: [
              "In a large bowl, arrange the salad greens.",
              "Top with grilled chicken, hard-boiled eggs, bacon, avocado slices, and crumbled blue cheese.",
              "Drizzle with vinaigrette dressing and toss lightly before serving."
            ]
          };
        document.getElementById("recipe-image").src = "./images/pexels-dana-tentis-118658-1213710.jpg"; 
        document.getElementById('rec-title').innerHTML = `${cs.title}`;
          document.getElementById('serve').innerHTML = `${cs.serving}`;
          document.getElementById('time').innerHTML =`${cs.time}`;
          document.getElementById('calories').innerHTML =`${cs.calories}`;
          document.getElementById('recipe-subtitle').innerHTML =`${cs.description}`;
          
          var ingList = document.getElementById('ingre-list');
          var ingredients = cs.ingredients;
          
         
          ingredients.forEach((ingredient) => {
              var node = document.createTextNode(ingredient); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              ingList.appendChild(element); 
          });
  
          var directions = cs.directions;
          var direcList = document.getElementById('direc-list');
          directions.forEach((direction) => {
              var node = document.createTextNode(direction); 
              var element = document.createElement('p'); 
              element.append(node); 
              element.classList.add('list-group-item'); 
              direcList.appendChild(element); 
          });
    }

    else if(val == 'avocadoToast'){
        var avt={
            title: "Avocado Toast",
            time: 10,
            serving: 1,
            calories: 250,
            description: "A simple yet delicious toast topped with creamy mashed avocado, seasoned with salt, pepper, and a drizzle of olive oil.",
            ingredients: [
              "2 slices whole-grain bread",
              "1 ripe avocado",
              "Salt and pepper",
              "Olive oil (optional)",
              "Red pepper flakes (optional)"
            ],
            directions: [
              "Toast the whole-grain bread slices until golden brown.",
              "Mash the avocado in a small bowl and season with salt and pepper.",
              "Spread the mashed avocado on the toast and drizzle with olive oil if desired.",
              "Sprinkle red pepper flakes for a bit of spice."
            ]
          };
        document.getElementById("recipe-image").src = "./images/pexels-pixabay-236813.jpg"; 
        document.getElementById('rec-title').innerHTML = `${avt.title}`;
        document.getElementById('serve').innerHTML = `${avt.serving}`;
        document.getElementById('time').innerHTML =`${avt.time}`;
        document.getElementById('calories').innerHTML =`${avt.calories}`;
        document.getElementById('recipe-subtitle').innerHTML =`${avt.description}`;
        
        var ingList = document.getElementById('ingre-list');
        var ingredients = avt.ingredients;
        
       
        ingredients.forEach((ingredient) => {
            var node = document.createTextNode(ingredient); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            ingList.appendChild(element); 
        });

        var directions = avt.directions;
        var direcList = document.getElementById('direc-list');
        directions.forEach((direction) => {
            var node = document.createTextNode(direction); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            direcList.appendChild(element); 
        });
    }


    else if(val == 'chickenParm'){
        var cp ={
            title: "Chicken Parm",
            time: 45,
            serving: 4,
            calories: 650,
            description: "Juicy breaded chicken breast, topped with marinara sauce and melted mozzarella, served over a bed of pasta.",
            ingredients: [
              "4 chicken breasts",
              "1 cup breadcrumbs",
              "1/2 cup grated Parmesan cheese",
              "2 cups marinara sauce",
              "1 cup mozzarella cheese, shredded",
              "2 tbsp olive oil",
              "Spaghetti (optional)"
            ],
            directions: [
              "Preheat oven to 375°F (190°C).",
              "Coat the chicken breasts with breadcrumbs and Parmesan cheese.",
              "Heat olive oil in a pan and fry the chicken until golden brown on both sides.",
              "Place the chicken in a baking dish, top with marinara sauce and shredded mozzarella cheese.",
              "Bake for 20-25 minutes, until the cheese is melted and bubbly.",
              "Serve with spaghetti or your favorite pasta if desired."
            ]
          };
        document.getElementById("recipe-image").src = "./images/pexels-sydney-troxell-223521-718742.jpg"; 
        document.getElementById('rec-title').innerHTML = `${cp.title}`;
        document.getElementById('serve').innerHTML = `${cp.serving}`;
        document.getElementById('time').innerHTML =`${cp.time}`;
        document.getElementById('calories').innerHTML =`${cp.calories}`;
        document.getElementById('recipe-subtitle').innerHTML =`${cp.description}`;
        
        var ingList = document.getElementById('ingre-list');
        var ingredients = cp.ingredients;
        
       
        ingredients.forEach((ingredient) => {
            var node = document.createTextNode(ingredient); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            ingList.appendChild(element); 
        });

        var directions = cp.directions;
        var direcList = document.getElementById('direc-list');
        directions.forEach((direction) => {
            var node = document.createTextNode(direction); 
            var element = document.createElement('p'); 
            element.append(node); 
            element.classList.add('list-group-item'); 
            direcList.appendChild(element); 
        });
    }


});