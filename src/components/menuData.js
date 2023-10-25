// Imports for pictures
import CrabPuffs from '../assets/Crabpuffs.png'
import EggRoll from '../assets/sushi-pics/eggrolls.jpg'
import SourSoup from '../assets/chinesefood/hot and sour soup.jpg'
import PankoShrimp from '../assets/chinesefood/panko shrimp.png'
// Salads Imports
import SpicyCrabSalad from '../assets/Salads/spicy crab salad.JPG'
// Entrees Imports
import BroccoliBeef from '../assets/chinesefood/broccoli beef.jpg'
import PorkRibs from '../assets/chinesefood/pork ribs.jpg'
import GeneralTsoChicken from '../assets/chinesefood/general tso shrimp.jpg'
import TeriyakiChicken from '../assets/chinesefood/teriyaki chicken.jpg'
import SweetSourShrimp from '../assets/chinesefood/sweet and sour shrimp.jpg'
import SesameChicken from '../assets/chinesefood/sesame chicken.JPG'
import SweetSourChicken from '../assets/chinesefood/sweet and sour chicken.JPG'
//


const menuData = {
  Appetizers: [
    { 
      name: "Crab Puffs", 
      description: "Crab, cream cheese", 
      price: 1,
      image: CrabPuffs
    },
    { 
      name: "Egg Roll", 
      description: "Classic Egg Roll", 
      price: 1,
      image: EggRoll
    },
    { 
      name: "Hot & Sour Soup", 
      description: "Spicy and sour soup containing mushrooms sour things and other spicy spices", 
      price: 1,
      image: SourSoup
    },
    { 
      name: "Panko Shrimp", 
      description: "Deep fried breaded shrimp", 
      price: 1,
      image: PankoShrimp
    },
    //... more appetizers
  ],
  Salads: [
    { 
      name: "Cucumber Sunomono", 
      description: "Sweet vinegar, avocado, sesame seed", 
      price: 3,
      image: 'no image'
    },
    { 
      name: "Salmon Sunomono", 
      description: "Fresh salmon, sweet vinegar, avocado sesame seed", 
      price: 4,
      image: 'no image'
    },
    { 
      name: "Spicy Crab Salad", 
      description: "Crab, cucumber, green onions, spicy mayo, avocado, cream cheese", 
      price: 5.50,
      image: SpicyCrabSalad
    },
    //... salads data
  ],
  Meals: [
    //... meals data
  ],
  Entrees: [
    { 
      name: "Broccoli Beef", 
      description: "", 
      price: 1,
      image: BroccoliBeef
    },
    { 
      name: "Pork Ribs", 
      description: "", 
      price: 1,
      image: PorkRibs
    },
    { 
      name: "General Tso Chicken", 
      description: "", 
      price: 1,
      image: GeneralTsoChicken
    },
    { 
      name: "Teriyaki Chicken", 
      description: "", 
      price: 1,
      image: TeriyakiChicken
    },
    { 
      name: "Sweet & Sour Shrimp", 
      description: "", 
      price: 1,
      image: SweetSourShrimp
    },
    { 
      name: "Sesame Chicken", 
      description: "", 
      price: 1,
      image: SesameChicken
    },
    { 
      name: "Sweet & Sour Chicken", 
      description: "", 
      price: 1,
      image: SweetSourChicken
    },
    { 
      name: "General Tso Shrimp", 
      description: "", 
      price: 1,
      image: 'no image'
    },
    
    //... entrees data
  ],
  Sides: [
    //... sides data
  ],
  SushiRoles: [
    //... sushi roles data
  ],
};


export default menuData;