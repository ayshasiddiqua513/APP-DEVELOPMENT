// src/components/AboutFlower.js
import React from 'react';
import {  Typography, Grid } from '@mui/material';
import FlowerCard from './FlowerCard';

const flowersData = [
  { 
    name: 'Rose', 
    region: 'Worldwide', 
    uses: 'Perfumes, decorations, medicinal', 
    marketValue: '$2 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-ooscCkvXKW7tP0wqfDsY99m1yDQB3HEcQ&s' 
  },
  { 
    name: 'Tulip', 
    region: 'Netherlands', 
    uses: 'Ornamental, gifts', 
    marketValue: '$1.5 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC1f8KXfJZ1Wh9StQ5kFo13cWya9HoIhzLA&s' 
  },
  { 
    name: 'Orchid', 
    region: 'Tropics, subtropics', 
    uses: 'Decorative, medicinal', 
    marketValue: '$3 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRduWDpcJ1LKxuIiFjBqahxWMOBBefliXbw&s' 
  },
  { 
    name: 'Lily', 
    region: 'Worldwide', 
    uses: 'Decorations, weddings', 
    marketValue: '$2.5 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OoltymDW25v-fg9JxSSNq03Xks0_7_A3Dg&s' 
  },
  { 
    name: 'Sunflower', 
    region: 'North America', 
    uses: 'Oil production, ornamental', 
    marketValue: '$1.2 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IRQ1QAHQVs5ZXsspk9kY8jQ991Ct3A4fCw&s' 
  },
  { 
    name: 'Daffodil', 
    region: 'Europe', 
    uses: 'Ornamental', 
    marketValue: '$1 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gCwxdc4z7k4ZpVk2X6NNBF_KaxTSmw3g6Q&s' 
  },
  { 
    name: 'Marigold', 
    region: 'Worldwide', 
    uses: 'Decorations, medicinal', 
    marketValue: '$0.8 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkcAM9V1iDydHsIvmn0RfFJn1MlyrTz4m8g&s' 
  },
  { 
    name: 'Chrysanthemum', 
    region: 'Asia', 
    uses: 'Tea, ornamental', 
    marketValue: '$1.5 per stem', 
    image: 'https://i0.wp.com/www.commonweeder.com/wp-content/uploads/2016/09/11-6-09-chrysanthemum-kiku.jpg?ssl=1' 
  },
  { 
    name: 'Geranium', 
    region: 'Mediterranean', 
    uses: 'Ornamental, medicinal', 
    marketValue: '$1.3 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaGv9DLbtoNdAW-9sKi2ogx205CYfcbicGUprIcoZ72rI_O8z6xtp8bxhsvyjj-qHSuc&usqp=CAU' 
  },
  { 
    name: 'Lavender', 
    region: 'Mediterranean', 
    uses: 'Aromatherapy, ornamental', 
    marketValue: '$1.7 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77MIdt9IrY3Nt1POPiCjI35VWsLLGU2aoww&s' 
  },
  { 
    name: 'Poppy', 
    region: 'Europe, Asia', 
    uses: 'Ornamental, medicinal', 
    marketValue: '$1.4 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QgDSL9nznSah_S6Nn8tPpD0W5khcgli25A&s' 
  },
  { 
    name: 'Dahlia', 
    region: 'Mexico', 
    uses: 'Ornamental', 
    marketValue: '$1.6 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgAM1tHWtJsVSrUiYo1cIGgEzW0u_C-zrZQ&s' 
  },
  { 
    name: 'Peony', 
    region: 'Asia, Europe, North America', 
    uses: 'Ornamental, medicinal', 
    marketValue: '$2.2 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27GAL36676Cuj4kd2Wc8Uoyie9uBMS1AALg&s' 
  },
  { 
    name: 'Carnation', 
    region: 'Mediterranean', 
    uses: 'Ornamental, medicinal', 
    marketValue: '$1.2 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rsYtpdtZPhTkTEZa22Z2XNX5i4r2fDTxQw&s' 
  },
  { 
    name: 'Bluebell', 
    region: 'Europe', 
    uses: 'Ornamental', 
    marketValue: '$1.3 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTit8HUVBtleOS7N7tSBSJpEwBGIiPrixW3pw&s' 
  },
  { 
    name: 'Jasmine', 
    region: 'Tropics, subtropics', 
    uses: 'Perfume, tea', 
    marketValue: '$1.8 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcZrjkzLGdjqxCuWcPcx6IiRBgCB2JXONpw&s' 
  },
  { 
    name: 'Magnolia', 
    region: 'Asia, Americas', 
    uses: 'Ornamental, medicinal', 
    marketValue: '$2.5 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmngOYeqkqIdAUnSZDbGBK2MW7uVxSCc00RA&s' 
  },
  { 
    name: 'Hyacinth', 
    region: 'Mediterranean', 
    uses: 'Ornamental', 
    marketValue: '$1.7 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWhB1auBJayePJWUz3qpyNLLrIn57C0QHQA&s' 
  },
  { 
    name: 'Petunia', 
    region: 'South America', 
    uses: 'Ornamental', 
    marketValue: '$1 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiz0Ao17Nc1Nni_m3O_znoSta_5LKwTLbTnA&s' 
  },
  { 
    name: 'Begonia', 
    region: 'Tropics, subtropics', 
    uses: 'Ornamental', 
    marketValue: '$1.4 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRRCkeSMCvsaEPVq1QnjP3LCYF2hFhQtyZw&s' 
  },
  { 
    name: 'Camellia', 
    region: 'Asia', 
    uses: 'Ornamental, tea', 
    marketValue: '$2 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnsR2C06pcv5Bow3_mJVuJY9rl47ASjkSFQ&s' 
  },
  { 
    name: 'Azalea', 
    region: 'Asia, Europe, North America', 
    uses: 'Ornamental', 
    marketValue: '$1.5 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtVz6NP4WK2bCG8nmp0NsGtvb2Krm9-gXsQ&s' 
  },
  { 
    name: 'Gardenia', 
    region: 'Tropics, subtropics', 
    uses: 'Perfume, ornamental', 
    marketValue: '$2 per stem', 
    image: 'https://m.media-amazon.com/images/I/61yIG7FeD9L.jpg' 
  },
  { 
    name: 'Hibiscus', 
    region: 'Tropics, subtropics', 
    uses: 'Tea, ornamental', 
    marketValue: '$1.8 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrot5oVa24BPD1R8dY3p5lUbvCZ5pl03k6tQ&s' 
  },
  { 
    name: 'Anemone', 
    region: 'Mediterranean, Japan', 
    uses: 'Ornamental', 
    marketValue: '$1.5 per stem', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhMIcTZjcIPUWbmMH3juV49Q7M3XyIQmnFA&s' 
  },
  { 
    name: 'Freesia', 
    region: 'South Africa', 
    uses: 'Ornamental, perfume', 
    marketValue: '$1.4 per stem', 
    image: 'https://www.thespruce.com/thmb/k4y3ac2iOiVLqY_CK-WUvFw_m2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freesia-flowers-1315761-hero-0e30585da85d4c0bacae0e1ad3e1516e.jpg' 
  }
];

const AboutFlower = () => {
  return (
    <div style={{ color: 'black', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Flowers and Their Uses
      </Typography>
      <Grid container spacing={5}>
        {flowersData.map((flower, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlowerCard flower={flower} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutFlower;
