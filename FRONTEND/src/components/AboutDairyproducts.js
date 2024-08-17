import React from 'react';
import './AboutDairyproducts.css';

const dairyProducts = [
  {
    name: 'Milk',
    region: 'Various Regions',
    uses: 'Consumed directly, used in cooking, baking, and beverages.',
    marketValue: 'High demand, essential commodity.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLw8pHDmM2BH0OlzTNjOQL15dqcQO8n6Ypg&s',
  },
  {
    name: 'Cheese',
    region: 'Europe, North America, Worldwide',
    uses: 'Used in sandwiches, pizzas, and a variety of dishes.',
    marketValue: 'High market value, specialty varieties can be expensive.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlurSTqw6tV6oCvfyX6rb-uwQXPd_2lJ9R05jp5zwCtODI51XtaXBMgbEGDNAJ8XsioLk&usqp=CAU',
  },
  {
    name: 'Butter',
    region: 'Global',
    uses: 'Used in cooking, baking, and as a spread.',
    marketValue: 'High market value, often traded in bulk.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4Pdzp-D8jbpM42951zYzejambgUOD6xPKA&s',
  },
  {
    name: 'Yogurt',
    region: 'Global',
    uses: 'Consumed as a snack, used in cooking and desserts.',
    marketValue: 'Growing market value due to health trends.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBHxa8Kw8HMSxL1Qq2SuU3_DwE-MEcgJvCS_hC0nAFhDovpw6yqC4J4bWQIgL4OkNoEY&usqp=CAU',
  },
  {
    name: 'Cream',
    region: 'Global',
    uses: 'Used in cooking, desserts, and as a topping.',
    marketValue: 'Moderate to high market value, luxury item in some regions.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TfMW0FCvkyrHORup9DvrTcWy80LooZq9zw&s',
  },
  {
    name: 'Ghee',
    region: 'South Asia, Middle East',
    uses: 'Used in cooking, especially in traditional dishes.',
    marketValue: 'High value in South Asian markets.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrpxPcwVgRWr0axlCskUZq_ceFv7XHTOBQ&s',
  },
  {
    name: 'Paneer',
    region: 'India, South Asia',
    uses: 'Used in vegetarian dishes, popular in Indian cuisine.',
    marketValue: 'High demand in South Asian communities.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfW8QK7NAUNAxw2AXUfBWN90K4KBD5ZwAuFg&s',
  },
  {
    name: 'Condensed Milk',
    region: 'Global',
    uses: 'Used in desserts, baking, and beverages.',
    marketValue: 'Moderate market value, popular in baking.',
    imageUrl: 'https://www.thespruceeats.com/thmb/uG3R7kOOuAo2BQJ0jcy-a-ISyWY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homemade-condensed-milk-1500-58ae094c5f9b58a3c91e41ba-5b3d38a546e0fb0037bd2d94.jpg',
  },
  {
    name: 'Kefir',
    region: 'Eastern Europe, Caucasus',
    uses: 'Consumed as a fermented milk drink, used in smoothies.',
    marketValue: 'Growing popularity in health-conscious markets.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGwh9x58NmawSNlJ-A6qSZVAUTo4c-YL3KA&s',
  },
  {
    name: 'Sour Cream',
    region: 'Global',
    uses: 'Used in dips, sauces, and as a topping.',
    marketValue: 'Moderate market value, popular in culinary applications.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_i4av0aeCE7gMYP9kyYASwceENsmrfyJwg&s',
  },
  {
    name: 'Whipped Cream',
    region: 'Global',
    uses: 'Used as a dessert topping, in cakes and beverages.',
    marketValue: 'Moderate market value, luxury item.',
    imageUrl: 'https://sugarspunrun.com/wp-content/uploads/2021/04/Homemade-Whipped-Cream-Recipe-1-of-1.jpg',
  },
  {
    name: 'Ricotta',
    region: 'Italy, Global',
    uses: 'Used in Italian dishes like lasagna and desserts.',
    marketValue: 'High demand in Italian cuisine.',
    imageUrl: 'https://www.thespruceeats.com/thmb/F8OID-hERdxE0NDAZbdLczmLCwY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/106908888-58aefb225f9b58a3c9287cf3.jpg',
  },
  {
    name: 'Mascarpone',
    region: 'Italy, Global',
    uses: 'Used in desserts like Tiramisu, and in savory dishes.',
    marketValue: 'High market value, often used in gourmet recipes.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pj05bYN3KoagDdPql_Bfbfg8loD2bcDF5w&s',
  },
  {
    name: 'Cottage Cheese',
    region: 'Global',
    uses: 'Consumed as a snack, used in salads and low-fat diets.',
    marketValue: 'Moderate market value, popular in health markets.',
    imageUrl: 'https://www.fermentingforfoodies.com/wp-content/uploads/2019/10/Small-curd-cottage-cheese.jpg',
  },
  {
    name: 'Clotted Cream',
    region: 'UK, Global',
    uses: 'Used in traditional English teas, as a spread on scones.',
    marketValue: 'Luxury item, high market value in niche markets.',
    imageUrl: 'https://www.alphafoodie.com/wp-content/uploads/2022/04/Clotted-Cream-square-cream-in-a-small-bowl.jpeg',
  },
  {
    name: 'Quark',
    region: 'Germany, Eastern Europe',
    uses: 'Used in baking, desserts, and as a spread.',
    marketValue: 'Growing market in health-conscious regions.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg-AicNrVpkWMI8QMUIszKMcIOb8y2myEcikltkgKwE2ic7FeZUG2FFo3er0ko0a-VhI&usqp=CAU',
  },
  {
    name: 'Labneh',
    region: 'Middle East',
    uses: 'Used as a spread, in dips, and in Mediterranean cuisine.',
    marketValue: 'Moderate market value, specialty item.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-5Sz_AHbvkksNzI-bZ4carHadcaaWz8FBQ&s',
  },
  {
    name: 'Buttermilk',
    region: 'Global',
    uses: 'Used in baking, cooking, and as a drink.',
    marketValue: 'Low to moderate market value, widely used in baking.',
    imageUrl: 'https://i0.wp.com/delishbite.in/wp-content/uploads/2023/07/Blog_1.jpg?resize=819%2C1024&ssl=1',
  },
  {
    name: 'Whey',
    region: 'Global',
    uses: 'Used in protein powders, supplements, and animal feed.',
    marketValue: 'High market value in fitness and nutrition markets.',
    imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Recipe_Collection/10-ways-to-use-leftover-whey-in-your-kitchen.jpg',
  },
  {
    name: 'Skyr',
    region: 'Iceland',
    uses: 'Consumed as a high-protein yogurt-like snack.',
    marketValue: 'Growing market value due to health trends.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8T_yrcCrmk0D97j3rAa7yEv8NvQ49Kb7axw&s',
  },
];

const AboutDairyproducts = () => {
  return (
    <div className="dairy-container">
      {dairyProducts.map((product, index) => (
        <div key={index} className="dairy-card">
          <img src={product.imageUrl} alt={product.name} className="dairy-image" />
          <h2>{product.name}</h2>
          <p><strong>Region:</strong> {product.region}</p>
          <p><strong>Uses:</strong> {product.uses}</p>
          <p><strong>Market Value:</strong> {product.marketValue}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutDairyproducts;
