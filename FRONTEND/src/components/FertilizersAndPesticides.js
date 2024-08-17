import React from "react";
import "./Fertilizers.css";

const fertilizersAndPesticides = [
  {
    name: "Urea",
    region: "Global",
    uses: "Nitrogen fertilizer, used in agriculture to promote plant growth.",
    marketValue: "High demand, widely used in farming.",
    imageUrl: "https://cdn.dotpe.in/longtail/store-items/2393421/6vOF7od0.jpeg",
  },
  {
    name: "Compost",
    region: "Global",
    uses: "Organic fertilizer, improves soil structure and nutrient content.",
    marketValue: "Moderate market value, popular among organic farmers.",
    imageUrl:
      "https://www.thespruce.com/thmb/oxFthqLNFEtT_qoWAA4UmYPaLpI=/3936x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1423388554-2dc0d71d8cd342a985be5f92cdb37047.jpg",
  },
  {
    name: "Potash",
    region: "Global",
    uses: "Potassium fertilizer, essential for plant health and development.",
    marketValue: "High market value, essential in many crops.",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/ETv7EzcJDiugt6KN5vZfxE.jpg",
  },
  {
    name: "Bone Meal",
    region: "Global",
    uses: "Phosphorus-rich organic fertilizer, used for root development.",
    marketValue: "Moderate market value, popular among organic gardeners.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U2JKnbXnWsbGG1H-OFNa6CTqyaO30S5MMA&s",
  },
  {
    name: "Neem Oil",
    region: "India, Global",
    uses: "Natural pesticide, used to control pests and diseases in plants.",
    marketValue: "High market value, widely used in organic farming.",
    imageUrl:
      "https://d1h5frde2m24sj.cloudfront.net/wp-content/uploads/2021/05/neem-oil-agricultural-pesticide-500x500-1.jpeg",
  },
  {
    name: "Fish Emulsion",
    region: "Global",
    uses: "Organic fertilizer, rich in nitrogen, used in vegetable gardening.",
    marketValue: "Moderate market value, popular in organic gardening.",
    imageUrl:
      "https://previews.123rf.com/images/markara/markara1805/markara180500049/101720891-hand-holding-soil-with-fertilizer-on-the-ground-.jpg",
  },
  {
    name: "Seaweed Extract",
    region: "Coastal Regions, Global",
    uses: "Organic fertilizer, promotes plant growth and improves soil health.",
    marketValue: "High market value, especially in organic farming.",
    imageUrl:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324993/kelp-seaweed.jpg",
  },
  {
    name: "Sulfur",
    region: "Global",
    uses: "Fungicide and soil amendment, improves soil acidity.",
    marketValue: "Moderate market value, essential in crop protection.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfAJfkkP-4givDNv4jKkCFY2LMqFR7tbrKd7wuq5ActpmV0yMj_wjLl8A7e79FspCfIA&usqp=CAU",
  },
  {
    name: "Pyrethrin",
    region: "Global",
    uses: "Natural insecticide, used to control a wide range of pests.",
    marketValue: "High market value, popular in organic pest control.",
    imageUrl:
      "https://www.thespruce.com/thmb/KGo881Pp0PPQ7xsomdQszGYP0Os=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/pyrethrin-insecticide-definition-1902891_Hero1-386797349e94413b8133a93e8008a582.jpg",
  },
  {
    name: "Dolomite Lime",
    region: "Global",
    uses: "Soil amendment, balances pH and provides calcium and magnesium.",
    marketValue: "Moderate market value, widely used in gardening.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDd1g64FjuGcLrnPoRwrdu0CpeLqd_lbPbA&s",
  },
  {
    name: "Epsom Salt",
    region: "Global",
    uses: "Soil amendment, provides magnesium and sulfate for plant health.",
    marketValue: "Moderate market value, commonly used in gardening.",
    imageUrl:
      "https://manossoap.com/cdn/shop/articles/epsom-salt-benefits.jpg?crop=center&height=1000&v=1567132390&width=1000",
  },
  {
    name: "Blood Meal",
    region: "Global",
    uses: "High-nitrogen organic fertilizer, promotes vigorous growth.",
    marketValue: "Moderate market value, popular in organic farming.",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/5/306831850/IR/ME/MH/77638490/redd-blood-meal-500x500.jpg",
  },
  {
    name: "Insecticidal Soap",
    region: "Global",
    uses: "Natural pesticide, used to control soft-bodied insects.",
    marketValue: "Moderate market value, widely used in organic pest control.",
    imageUrl:
      "https://www.saferbrand.com/media/Articles/Safer-Brand/what-is-insecticidal-soap.jpg",
  },
  {
    name: "Rock Phosphate",
    region: "Global",
    uses: "Phosphorus fertilizer, used to promote root growth.",
    marketValue: "High market value, essential in crop production.",
    imageUrl:
      "https://casadeamor.in/cdn/shop/products/phosphate_rock.jpg?v=1701503918&width=1445",
  },
  {
    name: "Copper Fungicide",
    region: "Global",
    uses: "Fungicide, used to control fungal diseases in plants.",
    marketValue: "Moderate market value, widely used in crop protection.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfy5CznkvtB9nGu-9U_3MMWdG8EUp72pTr7g&s",
  },
  {
    name: "Alfalfa Meal",
    region: "Global",
    uses: "Organic fertilizer, promotes healthy plant growth.",
    marketValue: "Moderate market value, popular in organic gardening.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4leaELF4dte2Zfu_doZqJKGxKRUyqwS6PQ&s",
  },
  {
    name: "Bt (Bacillus thuringiensis)",
    region: "Global",
    uses: "Natural insecticide, used to control caterpillars and other pests.",
    marketValue: "High market value, popular in organic pest control.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtltj5QhWX4faTk-ECfaFt_lbfk1nwy3nZug&s",
  },
];

const FertilizersAndPesticides = () => {
  return (
    <div>
      <div>
        <br/>
        <h1 className="heading">Fertilizers and Pesticides</h1>
      </div>
      <div className="dairy-container">
        {fertilizersAndPesticides.map((product, index) => (
          <div key={index} className="dairy-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="dairy-image"
            />
            <h2>{product.name}</h2>
            <p>
              <strong>Region:</strong> {product.region}
            </p>
            <p>
              <strong>Uses:</strong> {product.uses}
            </p>
            <p>
              <strong>Market Value:</strong> {product.marketValue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizersAndPesticides;
