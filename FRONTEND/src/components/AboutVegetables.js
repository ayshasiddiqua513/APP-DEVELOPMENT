import React from 'react';
import './AboutVegetables.css'; // Import external CSS file

const vegetablesData = [
    {
      name: "Carrot",
      region: "Worldwide",
      uses: "Salads, cooking, juice",
      marketValue: "$1.5 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrCSOdyBY1cDUztGUvn-MKKdw6u45Tvk_jA&s",
      fallbackText: "Carrot - A crunchy vegetable often used in salads and cooking.",
    },
    {
      name: "Broccoli",
      region: "Worldwide",
      uses: "Cooking, salads, steaming",
      marketValue: "$2 per pound",
      image: "https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg",
      fallbackText: "Broccoli - A green vegetable commonly steamed or used in cooking.",
    },
    {
      name: "Spinach",
      region: "Worldwide",
      uses: "Salads, cooking, smoothies",
      marketValue: "$1 per bunch",
      image: "https://www.trustbasket.com/cdn/shop/articles/Spinach.webp?v=1686909241",
      fallbackText: "Spinach - A leafy green vegetable often used in salads and smoothies.",
    },
    {
      name: "Tomato",
      region: "Worldwide",
      uses: "Salads, cooking, sauces",
      marketValue: "$1.8 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_RpV_Nq_aND67ekZG9sOso6gv4AQatx2sw&s",
      fallbackText: "Tomato - A versatile vegetable used in salads and cooking.",
    },
    {
      name: "Potato",
      region: "Worldwide",
      uses: "Cooking, baking, frying",
      marketValue: "$1 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v6-5oWwpOH3jeOliF9RJObbpb9OAYn8IZw&s",
      fallbackText: "Potato - A starchy vegetable used in various dishes.",
    },
    {
      name: "Onion",
      region: "Worldwide",
      uses: "Cooking, salads, pickling",
      marketValue: "$0.8 per pound",
      image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-27092,resizemode-75,msid-102435400/industry/cons-products/food/after-tomato-onion-prices-inch-up-amid-lower-sowing.jpg",
      fallbackText: "Onion - A flavorful vegetable used in cooking and salads.",
    },
    {
      name: "Cucumber",
      region: "Worldwide",
      uses: "Salads, pickling, sandwiches",
      marketValue: "$1.2 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE15vI0OSTv0oUfUTL3tZ-FDrm3YTn9i4dgA&s",
      fallbackText: "Cucumber - A refreshing vegetable often used in salads.",
    },
    {
      name: "Bell Pepper",
      region: "Worldwide",
      uses: "Salads, cooking, grilling",
      marketValue: "$2 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVYa_RBlmhm9U4LPivanbeLe4aZ1PHG_JJQ&s",
      fallbackText: "Bell Pepper - A colorful vegetable used in salads and cooking.",
    },
    {
      name: "Garlic",
      region: "Worldwide",
      uses: "Cooking, seasoning, pickling",
      marketValue: "$3 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MKSzxkD5J3GSmLsm6zi-w0rtpLDPJV_tiw&s",
      fallbackText: "Garlic - A pungent vegetable used for seasoning.",
    },
    {
      name: "Lettuce",
      region: "Worldwide",
      uses: "Salads, sandwiches, wraps",
      marketValue: "$1 per head",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6x4zvBFEIpMcdIL8VClfz28TEFC5qjAPHA&s",
      fallbackText: "Lettuce - A leafy vegetable used in salads and sandwiches.",
    },
    {
      name: "Cauliflower",
      region: "Worldwide",
      uses: "Cooking, roasting, salads",
      marketValue: "$2.5 per pound",
      image: "https://img.taste.com.au/DBCUD8iO/taste/2007/05/cauliflower-181864-2.jpg",
      fallbackText: "Cauliflower - A versatile vegetable used in cooking and salads.",
    },
    {
      name: "Eggplant",
      region: "Worldwide",
      uses: "Cooking, grilling, baking",
      marketValue: "$1.8 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTth8eFKwzKp4QxV2zYxMHAZMDQ3KFBAsI9Cg&s",
      fallbackText: "Eggplant - A purple vegetable used in cooking and grilling.",
    },
    {
      name: "Zucchini",
      region: "Worldwide",
      uses: "Cooking, grilling, baking",
      marketValue: "$1.5 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQCPlc-o3R15eDnAEvXlHnH2SuQI11VwGpQ&s",
      fallbackText: "Zucchini - A green vegetable used in cooking and baking.",
    },
    {
      name: "Peas",
      region: "Worldwide",
      uses: "Cooking, salads, soups",
      marketValue: "$2 per pound",
      image: "https://cdn.mos.cms.futurecdn.net/RaoRL54MKKuCpjMcrhLYeD-1200-80.jpg",
      fallbackText: "Peas - A small green vegetable used in cooking and salads.",
    },
    {
      name: "Corn",
      region: "Worldwide",
      uses: "Cooking, grilling, salads",
      marketValue: "$1 per ear",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6S7OO-ns1yEtjU_kTO_7bQ2h_wQbLLU_Tw&s",
      fallbackText: "Corn - A versatile vegetable used in cooking and grilling.",
    },
    {
      name: "Kale",
      region: "Worldwide",
      uses: "Salads, smoothies, cooking",
      marketValue: "$2 per bunch",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR835GfnL1thscw2KF2smTjE7uP8kPMIMzteA&s",
      fallbackText: "Kale - A leafy green vegetable used in salads and smoothies.",
    },
    {
      name: "Green Beans",
      region: "Worldwide",
      uses: "Cooking, salads, steaming",
      marketValue: "$1.5 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZ9hqp93qX3xRRZhXITuCC4AVckyLV_J0BA&s",
      fallbackText: "Green Beans - A versatile vegetable used in cooking and salads.",
    },
    {
      name: "Celery",
      region: "Worldwide",
      uses: "Salads, cooking, snacks",
      marketValue: "$1 per bunch",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwO28_X_NVkfWvvqE2fHo41w1fNO97DZ1RA&s",
      fallbackText: "Celery - A crunchy vegetable used in salads and snacks.",
    },
    {
      name: "Brussels Sprouts",
      region: "Worldwide",
      uses: "Cooking, roasting, steaming",
      marketValue: "$3 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIofRmnWjFRdiyGiufr7r2ZYv0DJdKXREOIg&s",
      fallbackText: "Brussels Sprouts - A small cabbage-like vegetable used in cooking.",
    },
    {
      name: "Beet",
      region: "Worldwide",
      uses: "Cooking, salads, juicing",
      marketValue: "$1.5 per pound",
      image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/02/20130540/shutterstock_1282068550-1-4.jpg",
      fallbackText: "Beet - A root vegetable used in cooking and salads.",
    },
    {
      name: "Radish",
      region: "Worldwide",
      uses: "Salads, cooking, snacks",
      marketValue: "$1 per bunch",
      image: "https://perfarmersglobal.in/wp-content/uploads/2023/10/white-raddish.jpg",
      fallbackText: "Radish - A crunchy vegetable often used in salads and snacks.",
    },
    {
      name: "Sweet Potato",
      region: "Worldwide",
      uses: "Cooking, baking, roasting",
      marketValue: "$1.5 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoBketPWvPJhC7u2Vsk2EPd4XzBJiEYSSzw&s",
      fallbackText: "Sweet Potato - A nutritious vegetable used in cooking and baking.",
    },
    {
      name: "Pumpkin",
      region: "Worldwide",
      uses: "Cooking, baking, soups",
      marketValue: "$0.5 per pound",
      image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/279610_2200-1200x628.jpg",
      fallbackText: "Pumpkin - A versatile vegetable used in cooking and baking.",
    },
    {
      name: "Cabbage",
      region: "Worldwide",
      uses: "Salads, cooking, fermenting",
      marketValue: "$1 per head",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDUN5SUsLMUAupeWKUS6iw_q_0fMGv6EPSg&s",
      fallbackText: "Cabbage - A leafy vegetable used in salads and cooking.",
    },
    {
      name: "Mushroom",
      region: "Worldwide",
      uses: "Cooking, salads, soups",
      marketValue: "$3 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujbxshfqojBueY_eHxM0a4r2d6eT0b6chYA&s",
      fallbackText: "Mushroom - A fungi often used in cooking and salads.",
    },
    {
      name: "Asparagus",
      region: "Worldwide",
      uses: "Cooking, grilling, salads",
      marketValue: "$3 per bunch",
      image: "https://www.alphafoodie.com/wp-content/uploads/2023/06/How-to-Store-Asparagus-square.jpeg",
      fallbackText: "Asparagus - A green vegetable used in cooking and grilling.",
    },
    {
      name: "Turnip",
      region: "Worldwide",
      uses: "Cooking, salads, roasting",
      marketValue: "$1.2 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMh0xzoSDOp3iufLAa5ymXnjS8k50Vms0vA&s",
      fallbackText: "Turnip - A root vegetable used in cooking and salads.",
    },
    {
      name: "Leek",
      region: "Worldwide",
      uses: "Cooking, soups, stews",
      marketValue: "$2 per bunch",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vKcy82IzWF-ggt64sQJgqFTNdxsoEvtkbA&s",
      fallbackText: "Leek - A long, green vegetable used in cooking and soups.",
    },
    {
      name: "Butternut Squash",
      region: "Worldwide",
      uses: "Cooking, soups, roasting",
      marketValue: "$1.5 per pound",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYCRz-bp6cvXZrvQ_SRtcbwcvvg4m1dS1zQ&s",
      fallbackText: "Butternut Squash - A nutritious vegetable used in cooking and soups.",
    }
  ];
  const AboutVegetables = () => {
    return (
      <div className="vegetables-container">
        {vegetablesData.map((vegetable, index) => (
          <div key={index} className="vegetable-card">
            <img src={vegetable.image} alt={vegetable.name} className="vegetable-image" />
            <div className="vegetable-info">
              <h3 className="vegetable-name">{vegetable.name}</h3>
              <p className="vegetable-region"><strong>Region:</strong> {vegetable.region}</p>
              <p className="vegetable-uses"><strong>Uses:</strong> {vegetable.uses}</p>
              <p className="vegetable-market-value"><strong>Market Value:</strong> {vegetable.marketValue}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default AboutVegetables;