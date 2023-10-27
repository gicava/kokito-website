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
import GeneralTsoShrimp from '../assets/chinesefood/general tso shrimp.jpg'
import FriedRice from '../assets/chinesefood/fried rice.jpg'
import SteamedRice from '../assets/chinesefood/steamed rice.jpg'
import EggNoodle from "../assets/chinesefood/noodles.jpg"
import MixedVegetables from "../assets/chinesefood/mixed vegetables.JPG"
import TorchedSalmonRoll from "../assets/sushi-pics/torched salmon roll.JPEG"
import LobsterRoll from "../assets/sushi-pics/lobster roll.JPEG"
import MangoHabaneroRoll from "../assets/sushi-pics/mango habanero roll.JPG"
import KokitoRoll from "../assets/sushi-pics/kokito roll.jpg"
import MillyRoll from "../assets/sushi-pics/milly roll.jpg"
import CalamariRoll from "../assets/sushi-pics/calamari-roll.PNG"
import PhiladelphiaRoll from "../assets/sushi-pics/philadelphia roll.jpg"
import CeasarinRoll  from "../assets/sushi-pics/cesarin roll.jpg"
import MasagoRoll  from "../assets/sushi-pics/masago roll.JPEG"
import SpecialRubiRoll from "../assets/sushi-pics/special rubi roll.JPG"
import FriedChickenRoll from "../assets/sushi-pics/fried chicken roll.jpg"
import GuaySpicyRoll  from "../assets/sushi-pics/guay roll.JPEG"
import CaliforniaRoll from "../assets/sushi-pics/california roll.jpg"
import FlamingHotRoll from "../assets/sushi-pics/flaming hot roll.JPG"
import RainbowRoll from "../assets/sushi-pics/rainbow roll.jpg"
import SenseiRoll from "..//assets/sushi-pics/sensei roll.JPG"
import SpicyTunaRoll from "../assets/sushi-pics/spicy tuna roll.JPEG"
import YariRoll from "../assets/sushi-pics/yari roll.JPG"
import EsmerRoll from "../assets/sushi-pics/esmer roll.JPG"
import CaterpillarRoll from "../assets/sushi-pics/caterpillar roll.JPG"
import DragonRoll from "../assets/sushi-pics/dragon roll.JPEG"

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
      image: GeneralTsoShrimp
    },
    
    //... entrees data
  ],
  Sides: [
    { 
      name: "Fried Rice", 
      description: "", 
      price: 1,
      image: FriedRice
    },
    { 
      name: "Steamed Rice", 
      description: "", 
      price: 1,
      image: SteamedRice
    },
    { 
      name: "Egg Noodles", 
      description: "", 
      price: 1,
      image: EggNoodle
    },
    { 
      name: "Mixed Vegetables", 
      description: "", 
      price: 1,
      image: MixedVegetables
    },


    //... sides data
  ],
  SushiRolls: [
    { 
      name: "Torched Salmon Roll ", 
      description: "", 
      price: 1,
      image: TorchedSalmonRoll
    },
    { 
      name: "Lobster Roll", 
      description: "", 
      price: 1,
      image: LobsterRoll
    },
    { 
      name: "Mango Habanero Roll", 
      description: "", 
      price: 1,
      image: MangoHabaneroRoll
    },
    { 
      name: "Kokito Roll", 
      description: "", 
      price: 1,
      image: KokitoRoll
    },
    { 
      name: "Milly Roll", 
      description: "", 
      price: 1,
      image: MillyRoll
    },
    { 
      name: "Calamari Roll", 
      description: "", 
      price: 1,
      image: CalamariRoll
    },
    { 
      name: "Philadelphia Roll", 
      description: "", 
      price: 1,
      image: PhiladelphiaRoll
    },
    { 
      name: "Ceasarin Roll", 
      description: "", 
      price: 1,
      image: CeasarinRoll
    },
    { 
      name: "Masago Roll", 
      description: "", 
      price: 1,
      image: MasagoRoll
    },
    { 
      name: "Special Rubi Roll", 
      description: "", 
      price: 1,
      image: SpecialRubiRoll
    },
    { 
      name: "Fried Chicken Roll", 
      description: "", 
      price: 1,
      image: FriedChickenRoll
    },
    { 
      name: "Guay Spicy Roll", 
      description: "", 
      price: 1,
      image: GuaySpicyRoll
    },
    { 
      name: "California Roll", 
      description: "", 
      price: 1,
      image: CaliforniaRoll
    },
    { 
      name: "Flaming Hot Roll", 
      description: "", 
      price: 1,
      image: FlamingHotRoll
    },
    { 
      name: "Rainbow Roll", 
      description: "", 
      price: 1,
      image: RainbowRoll
    },
    { 
      name: "Sensei Roll", 
      description: "", 
      price: 1,
      image: SenseiRoll
    },
    { 
      name: "Veggie Roll", 
      description: "", 
      price: 1,
      image: 'no image'
    },
    { 
      name: "Spicy Tuna Roll", 
      description: "", 
      price: 1,
      image: SpicyTunaRoll
    },
    { 
      name: "Yari Roll", 
      description: "", 
      price: 1,
      image: YariRoll
    },
    { 
      name: "Esmer Roll", 
      description: "", 
      price: 1,
      image: EsmerRoll
    },
    { 
      name: "Caterpillar Roll", 
      description: "", 
      price: 1,
      image: CaterpillarRoll
    },
    { 
      name: "Dragon Roll", 
      description: "", 
      price: 1,
      image: DragonRoll
    },
   
    //... sushi rolls data
  ],

    
  
};


export default menuData;