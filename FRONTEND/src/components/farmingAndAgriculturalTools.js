import React from 'react';
import './farmingAndAgriculturalTools.css';

const farmingAndAgriculturalTools = [
  {
    name: 'Tractor',
    region: 'Global',
    uses: 'Used for plowing, tilling, planting, and other farm tasks.',
    marketValue: 'High demand, essential for large-scale farming.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcFozISgjJJLJp0sQ6astTfwBH_fGg3T1-A&s',
  },
  {
    name: 'Plow',
    region: 'Global',
    uses: 'Used to turn over the soil and prepare it for planting.',
    marketValue: 'Moderate market value, widely used in farming.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CVRpkb4zLiNu1nf_02R14TF-RLFIrYfyjg&s',
  },
  {
    name: 'Harvester',
    region: 'Global',
    uses: 'Used for harvesting crops efficiently.',
    marketValue: 'High market value, essential for crop production.',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/3/SH/IT/IW/16432559/51-inch-standard-combine-harvesters-four-wheel-drive.jpg',
  },
  {
    name: 'Seeder',
    region: 'Global',
    uses: 'Used for sowing seeds in the soil.',
    marketValue: 'Moderate market value, important for planting.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm5Zb6f2A_6bdr-4_S1hDKNwUD52NN7XkwQ&s',
  },
  {
    name: 'Irrigation System',
    region: 'Global',
    uses: 'Used for providing water to crops.',
    marketValue: 'High market value, essential for crop growth.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEpK80o-QpaSZKe5-fwY2T14AyqMhX2PXrA&s',
  },
  {
    name: 'Hoe',
    region: 'Global',
    uses: 'Used for weeding and cultivating the soil.',
    marketValue: 'Moderate market value, commonly used in gardening.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxmDr4E1QGPcVq1EOL9V9CB--fq0eFcml7Q&s',
  },
  {
    name: 'Shovel',
    region: 'Global',
    uses: 'Used for digging and moving soil or other materials.',
    marketValue: 'Moderate market value, widely used in farming and gardening.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaO2dOut4i4ex3PUe-5PSE1P2KaM1JTnSEIg&s',
  },
  {
    name: 'Wheelbarrow',
    region: 'Global',
    uses: 'Used for transporting materials around the farm.',
    marketValue: 'Moderate market value, essential for farm labor.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mp9sVBlj7gkKJhcMQATDNBpSnHx7p-2u9A&s',
  },
  {
    name: 'Rake',
    region: 'Global',
    uses: 'Used for collecting leaves, hay, and other debris.',
    marketValue: 'Moderate market value, commonly used in farming and gardening.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwQRuTYLtw-aUs0ZEnu8RL-C0_k8cULo_GA&s',
  },
  {
    name: 'Pruning Shears',
    region: 'Global',
    uses: 'Used for trimming and cutting plants.',
    marketValue: 'Moderate market value, widely used in gardening and farming.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFJ4hxzdXXmsXQcLGQDnDxAQ-IkuSIK42Rw&s',
  },
  {
    name: 'Sprayer',
    region: 'Global',
    uses: 'Used for applying pesticides and fertilizers to crops.',
    marketValue: 'Moderate market value, essential for crop protection.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1oxdm-Hlky8gNUiOIVNeR2RD74ZoPmKebg&s',
  },
  {
    name: 'Tiller',
    region: 'Global',
    uses: 'Used for tilling and aerating the soil.',
    marketValue: 'Moderate market value, important for soil preparation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqCQYvlBZjhgp02fYcCccNU7cJJew2puVnQ&s',
  },
  {
    name: 'Harrow',
    region: 'Global',
    uses: 'Used for breaking up and smoothing out the soil surface.',
    marketValue: 'Moderate market value, widely used in farming.',
    imageUrl: 'https://www.fieldking.com/images/tillage/harrow/lg/mounted-offset-disc-harrow.png',
  },
  {
    name: 'Post Hole Digger',
    region: 'Global',
    uses: 'Used for digging holes for fence posts and other supports.',
    marketValue: 'Moderate market value, essential for fencing and construction.',
    imageUrl: 'https://www.fieldking.com/images/seeding-and-plantation/post-hole-digger/lg/post-hole-digger.png',
  },
  {
    name: 'Water Pump',
    region: 'Global',
    uses: 'Used for extracting water from wells or other sources.',
    marketValue: 'High market value, essential for irrigation.',
    imageUrl: 'https://m.media-amazon.com/images/I/61AaXE6nHuL._AC_UF1000,1000_QL80_.jpg',
  },
];

const FarmingAndAgriculturalTools = () => {
  return (
    <div>
        <br/>
    <h1 className="heading">Farming and Agricultural Tools</h1>
    <div className="dairy-container">
      {farmingAndAgriculturalTools.map((tool, index) => (
          <div key={index} className="dairy-card">
          <img src={tool.imageUrl} alt={tool.name} className="dairy-image" />
          <h2>{tool.name}</h2>
          <p><strong>Region:</strong> {tool.region}</p>
            
          <p><strong>Uses:</strong> {tool.uses}</p>
          <p><strong>Market Value:</strong> {tool.marketValue}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FarmingAndAgriculturalTools;
