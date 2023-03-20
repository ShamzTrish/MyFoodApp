
const data = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'This classic Japanese dish consists of bite-sized pieces of vinegar-flavored rice topped with raw or cooked fish, seafood, or vegetables. Sushi is often served with soy sauce, wasabi, and pickled ginger on the side. Price range: $10-$30 depending on the type of sushi',
      price: 10.50,
      tags: 'Japanese'
    },
    {
      id: 'm2',
      name: 'Pork Schnitzel',
      description: 'This is a thin slice of meat (typically pork, but can also be chicken or veal) that is breaded and fried until crispy. It is often served with a side of potatoes, salad, or a creamy mushroom sauce.',
      price: 16.5,
      tags: 'German'
    },
    { 
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'Pure American joy, one of the most classic you can get, super meaty with tripple cheese & home made BBQ sauce',
      price: 12.99,
      tags: 'American'
    },
    {
      id: 'm4',
      name: 'Coq au Vin ',
      description: 'This is a classic French dish consisting of chicken braised in red wine, bacon, mushrooms, and onions. It is typically served with a side of potatoes or crusty bread.',
      price: 17.50,
      tags: 'French'
    },
  
    {
      id: 'm6',
      name: 'Goulash',
      description: ' This hearty beef stew is made with tender beef, onions, and paprika, resulting in a rich and flavorful dish. It is often served with bread dumplings or boiled potatoes.',
      price: 17,
      tags: 'Czech'
    },
    {
      id: 'm7',
      name: 'Pho dat biet',
      description: 'This is a Vietnamese noodle soup that is typically made with beef or chicken broth, rice noodles, and a variety of meat toppings such as sliced beef or chicken, meatballs, and tendon. It is often served with a plate of fresh herbs, bean sprouts, and lime wedges to add to the soup as desired.',
      price: 19.99,
      tags: 'Vietnamese'
    },
    {
      id: 'm8',
      name: 'Tacos',
      description: 'This is a classic Mexican dish consisting of a soft or hard tortilla filled with a variety of ingredients such as seasoned meat (usually beef, chicken, or pork), cheese, lettuce, tomatoes, onions, and salsa. Tacos can be customized to suit a variety of tastes and dietary preferences.',
      price: 13.50,
      tags: 'Mexican'
    },
    {
      id: 'm9',
      name: 'Butter Chicken',
      description: 'This is a popular dish in Indian cuisine made with marinated chicken in a creamy tomato-based sauce, with a touch of butter and spices like garam masala, turmeric and cumin. It is typically served with basmati rice or naan bread.',
      price: 20.70,
      tags: 'Indian'
    },
    {
      id: 'm10',
      name: 'Cheeseburger and Fries',
      description: ' This is a classic American meal that consists of a juicy beef patty topped with melted cheese, lettuce, tomato, pickles, and condiments such as ketchup and mustard, served on a soft bun with a side of crispy French fries.',
      price: 16.70,
      tags: 'American'
    },
    {
      id: 'm11',
      name: 'Fried Chicken and Biscuits',
      description: 'This Southern staple is a crispy fried chicken served with fluffy buttermilk biscuits and a side of creamy gravy. The chicken is usually seasoned with a blend of herbs and spices and can be served bone-in or boneless',
      price: 19.70,
      tags: 'American'
    },
    {
      id: 'm12',
      name: 'BBQ Ribs',
      description: ' This meal features slow-cooked pork ribs smothered in tangy BBQ sauce, served with a side of coleslaw and baked beans. The ribs are fall-off-the-bone tender and the sauce is sweet and savory',
      price: 32.20,
      tags: 'American'
    },
    {
      id: 'm14',
      name: 'Macaroni and Cheese',
      description: 'This is a creamy and cheesy pasta dish that is loved by both kids and adults. It can be made with a variety of cheeses and can be served as a side or as a main course.',
      price: 23.70,
      tags: 'American'
    },
    {
      id: 'm15',
      name: 'Spaghetti Carbonara',
      description: 'This classic pasta dish features spaghetti tossed in a rich and creamy sauce made with eggs, pancetta or bacon, Parmesan cheese, and black pepper. The sauce is cooked using the heat of the hot pasta, resulting in a smooth and velvety texture.',
      price: 12.70,
      tags: 'Italian'
    },
    {
      id: 'm16',
      name: 'Lasagna E classico',
      description: 'This classic Italian dish consists of layers of flat pasta sheets, a tomato-based meat sauce, and creamy béchamel sauce, all topped with melted cheese. The layers of pasta, sauce, and cheese are baked to perfection, resulting in a delicious and hearty meal.',
      price: 15.00,
      tags: 'Italian'
    },
    {
      id: 'm17',
      name: 'Margherita Pizza',
      description: 'This traditional Neapolitan pizza is topped with a simple yet flavorful combination of tomato sauce, fresh mozzarella cheese, and basil leaves. The crust is thin and crispy, allowing the toppings to shine.',
      price: 18.20,
      tags: 'Italian'
    },
    {
      id: 'm18',
      name: 'Risotto alla Milanese',
      description: 'This creamy and savory rice dish is flavored with saffron, giving it a distinct yellow color and unique flavor. The rice is slowly cooked in chicken broth, white wine, and onions, and finished with butter and grated Parmesan cheese.',
      price: 21.70,
      tags: 'Italian'
    },
    {
      id: 'm19',
      name: 'Ichiraku Naruto Ramen',
      description: 'Ramen: This popular Japanese noodle dish features wheat noodles served in a savory broth with toppings such as sliced pork, boiled egg, bamboo shoots, and green onions. The broth can be made with various ingredients and flavors, such as miso, soy sauce, or tonkotsu (pork bone broth).',
      price: 25.70,
      tags: 'Japanese'
    },
    {
      id: 'm20',
      name: 'Tempura',
      description: 'This dish features battered and deep-fried seafood, vegetables, or meat. The batter is usually made with flour, egg, and ice-cold water, resulting in a light and crispy texture. Tempura is often served with a dipping sauce and grated daikon radish.',
      price: 10.70,
      tags: 'Japanese'
    },
    {
      id: 'm21',
      name: 'Teriyaki Chicken',
      description: 'This dish features grilled or pan-fried chicken that has been marinated in a sweet and savory sauce made with soy sauce, sake, mirin, and sugar. The sauce is brushed onto the chicken during cooking, resulting in a caramelized and flavorful glaze.',
      price: 16.00,
      tags: 'Japanese'
    },
    {
      id: 'm22',
      name: 'Okonomiyaki',
      description: 'This savory pancake-like dish is made with a batter of flour, eggs, and shredded cabbage, and can be filled with various ingredients such as sliced pork, shrimp, or octopus.',
      price: 12.10,
      tags: 'Japanese'
    },
    {
      id: 'm23',
      name: 'Svíčková',
      description: 'This is a traditional Czech beef dish that consists of tender beef sirloin that has been marinated in a cream-based sauce made with root vegetables, spices, and vinegar. It is usually served with a side of knedlíky (dumplings) and cranberry sauce. ',
      price: 25.10,
      tags: 'Czech'
    },
    {
      id: 'm24',
      name: 'Smazeny syr',
      description: 'This dish features breaded and fried cheese, usually made with edam or gouda cheese. It is often served with a side of tartar sauce and a slice of lemon.',
      price: 15.10,
      tags: 'Czech'
    },
    {
      id: 'm25',
      name: 'Vepřo knedlo zelo',
      description: 'This is a classic Czech meal that features roast pork with knedlíky (dumplings) and sauerkraut. The pork is usually marinated in garlic and caraway seeds before being roasted to perfection.',
      price: 18.50,
      tags: 'Czech'
    },
    {
      id: 'm26',
      name: 'Bramborák',
      description: 'This traditional Czech potato pancake is made with grated potatoes, flour, and eggs, and can be flavored with various herbs and spices such as garlic, caraway seeds, or marjoram. It is often served with a side of sour cream or applesauce.',
      price: 19.99,
      tags: 'Czech'
    },
    {
      id: 'm27',
      name: 'Sauerbraten',
      description: 'This is a traditional German pot roast that is marinated for several days in a mixture of vinegar, spices, and red wine. The meat is then slow-cooked until it is tender and served with a sweet and sour gravy made from the marinade.',
      price: 19.99,
      tags: 'German'
    },
    {
      id: 'm28',
      name: 'Kartoffelpuffer',
      description: ' Also known as potato pancakes, these are made by grating raw potatoes and mixing them with flour, eggs, and seasoning before frying them until golden brown. They are often served with a dollop of sour cream or apple sauce.',
      price: 21.99,
      tags: 'German'
    },
    {
      id: 'm29',
      name: 'Rouladen',
      description: 'This is a hearty dish made by rolling thin slices of beef around a filling of onions, bacon, and pickles before slow-cooking them in a rich beef broth. The resulting dish is tender and flavorful, and is often served with a side of potatoes or spaetzle.',
      price: 18.99,
      tags: 'German'
    },
    {
      id: 'm30',
      name: 'Wurst',
      description: 'German sausages come in a variety of types, including bratwurst, bockwurst, and weisswurst. They are typically grilled or fried and served with mustard, sauerkraut, and a side of bread or potato salad.',
      price: 13.99,
      tags: 'German'
    },
    {
      id: 'm31',
      name: 'Banh Mi',
      description: 'This is a Vietnamese sandwich that is typically made with a crispy baguette filled with pickled vegetables, sliced meat (usually pork or chicken), and fresh herbs such as cilantro and mint. It is often dressed with mayonnaise and a spicy chili sauce.',
      price: 9.99,
      tags: 'Vietnamese'
    },
    {
      id: 'm32',
      name: 'Bun Cha',
      description: 'This is a dish of grilled pork patties served with rice vermicelli noodles, fresh herbs, and a tangy dipping sauce. It is typically eaten by wrapping the pork and herbs in lettuce leaves and dipping them into the sauce.',
      price: 11,
      tags: 'Vietnamese'
    },
    {
      id: 'm33',
      name: 'Com Tam',
      description: 'This is a dish of broken rice served with a variety of toppings such as grilled pork chops, shredded pork skin, and a fried egg. It is often served with a side of pickled vegetables and a sweet and spicy fish sauce.',
      price: 12.99,
      tags: 'Vietnamese'
    },
    {
      id: 'm34',
      name: 'Goi Cuon',
      description: 'Also known as fresh spring rolls, these are rice paper rolls filled with a variety of fresh ingredients such as shrimp, pork, vermicelli noodles, lettuce, and herbs. They are typically served with a peanut dipping sauce.',
      price: 6.99,
      tags: 'Vietnamese'
    },
    {
      id: 'm35',
      name: 'Enchiladas',
      description: ' These are corn tortillas filled with a variety of ingredients such as shredded chicken, beef, or cheese, and then rolled up and covered in a spicy tomato or chili sauce. They are typically served with a side of refried beans and Mexican rice.',
      price: 6.99,
      tags: 'Mexican'
    },
    {
      id: 'm36',
      name: 'Tamales',
      description: 'These are steamed corn husks filled with a variety of ingredients such as seasoned meat, cheese, and vegetables. They are typically served with a side of salsa and guacamole.',
      price: 9.99,
      tags: 'Mexican'
    },
    {
      id: 'm37',
      name: 'Chiles Rellenos',
      description: 'This is a dish of large, mild chili peppers that are stuffed with cheese or seasoned meat, coated in a light batter, and fried until crispy. They are typically served with a side of Mexican rice and refried beans.',
      price: 7.99,
      tags: 'Mexican'
    },
    {
      id: 'm38',
      name: 'Pozole',
      description: 'This is a hearty soup made with hominy (dried corn kernels), pork, and a variety of spices. It is typically served with a side of fresh lime wedges, sliced radishes, and chopped cilantro.',
      price: 12.99,
      tags: 'Mexican'
    },
    {
      id: 'm39',
      name: 'Tikka Masala',
      description: 'This dish consists of chunks of marinated chicken or paneer (cheese), cooked in a creamy tomato-based sauce, with a blend of spices such as coriander, cumin, paprika and turmeric. It is typically served with basmati rice or naan bread.',
      price: 17.99,
      tags: 'Indian'
    },
    {
      id: 'm40',
      name: 'Saag Paneer',
      description: 'This is a vegetarian dish made with paneer (cheese) and spinach cooked in a fragrant blend of spices. The paneer and spinach mixture is typically served with basmati rice or naan bread.',
      price: 18.99,
      tags: 'Indian'
    },
    {
      id: 'm41',
      name: 'Chana Masala',
      description: 'This is a vegetarian dish made with chickpeas cooked in a tangy tomato-based sauce, seasoned with a blend of spices such as garam masala, cumin and coriander. It is typically served with basmati rice or naan bread.',
      price: 20.99,
      tags: 'Indian'
    },
    {
      id: 'm42',
      name: 'Biryani',
      description: ' This is a flavorful rice dish made with basmati rice, a variety of spices, vegetables, and/or meat. It is typically served with raita, a yogurt-based condiment, and a side of papadum (a crispy flatbread).',
      price: 21.99,
      tags: 'Indian'
    },
    {
      id: 'm43',
      name: 'Boeuf Bourguignon',
      description: 'This is a hearty beef stew made with red wine, bacon, onions, and mushrooms. It is typically served with a side of potatoes or crusty bread.',
      price: 21.70,
      tags: 'French'
    },
    {
      id: 'm44',
      name: 'Ratatouille',
      description: 'This is a vegetarian dish made with a variety of vegetables such as eggplant, zucchini, peppers, onions, and tomatoes, cooked together in a flavorful sauce made with olive oil, garlic, and herbs like thyme and rosemary. It can be served as a side dish or as a main course with a side of crusty bread.',
      price: 19.70,
      tags: 'French'
    },
    {
      id: 'm45',
      name: 'Quiche Lorraine',
      description: ' This is a savory pie made with a flaky crust filled with eggs, cream, cheese, and bacon or ham. It is typically served with a side salad.',
      price: 18.70,
      tags: 'French'
    },
    {
      id: 'm46',
      name: 'Salade Niçoise',
      description: 'This creamy and savory rice dish is flavored with saffron, giving it a distinct yellow color and unique flavor. The rice is slowly cooked in chicken broth, white wine, and onions, and finished with butter and grated Parmesan cheese.',
      price: 21.70,
      tags: 'French'
    },

  ]

  export default data