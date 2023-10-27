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
// Sushi Rolls
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
// Fried Rolls
import TierraRoll from '../assets/sushi-pics/tierra roll.JPG'
import FijiRoll from '../assets/sushi-pics/fiji-roll.png'
// Riceless Rolls
import AcapulcoRoll from '../assets/sushi-pics/acapulco roll.jpg'
import MaresRoll from '../assets/sushi-pics/mares roll.JPEG'
import NilaRoll from '../assets/sushi-pics/nila roll.JPG'
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
      description: "Fried crab, cream cheese, avocado, asparagus, tempura flakes, crispy onions, and torched salmon on top", 
      price: 10,
      image: TorchedSalmonRoll
    },
    { 
      name: "Lobster Roll", 
      description: "Fried lobster, spicy crab, masago, avocado, lettuce, carrots", 
      price: 16,
      image: LobsterRoll
    },
    { 
      name: "Mango Habanero Roll", 
      description: "Fried shrimp, cream cheese, avocado, spicy mango on top", 
      price: 9,
      image: MangoHabaneroRoll
    },
    { 
      name: "Kokito Roll", 
      description: "Fried shrimp, cream cheese, avocado, spicy crab, eel sauce, tempura, coconut flakes", 
      price: 9,
      image: KokitoRoll
    },
    { 
      name: "Milly Roll", 
      description: "Crab, avocado, cucumber, salmon on top", 
      price: 9,
      image: MillyRoll
    },
    { 
      name: "Calamari Roll", 
      description: "Fried shrimp, cream cheese, avocado, cucumber, chopped calamari", 
      price: 9,
      image: CalamariRoll
    },
    { 
      name: "Philadelphia Roll", 
      description: "Salmon, avocado, cream cheese, cucumber, sesame seed", 
      price: 6.50,
      image: PhiladelphiaRoll
    },
    { 
      name: "Ceasarin Roll", 
      description: "Crab, avocado, cucumber, cream cheese, spicy salmon, spicy mayo", 
      price: 9,
      image: CeasarinRoll
    },
    { 
      name: "Masago Roll", 
      description: "Crab, avocado, cucumber, cream cheese, masago on top", 
      price: 7.50,
      image: MasagoRoll
    },
    { 
      name: "Special Rubi Roll", 
      description: "Fried shrimp, avocado, cream cheese, eel sauce, spicy mayo, crab and tempura flakes on top", 
      price: 9,
      image: SpecialRubiRoll
    },
    { 
      name: "Fried Chicken Roll", 
      description: "Chicken tempura, cheam cheese, avocado, tempura crunch, spicy mayo", 
      price: 7,
      image: FriedChickenRoll
    },
    { 
      name: "Guay Spicy Roll", 
      description: "Salmon, tuna, avocado, cucumber, lettuce, carrots, masago, spicy sauce", 
      price: 10,
      image: GuaySpicyRoll
    },
    { 
      name: "California Roll", 
      description: "Crab, avocado, cucumber, sesame seed", 
      price: 5.50,
      image: CaliforniaRoll
    },
    { 
      name: "Flaming Hot Roll", 
      description: "Shrimp tempura, cream cheese, avocado, Hot cheetos, spicy mayo, eel sauce", 
      price: 9,
      image: FlamingHotRoll
    },
    { 
      name: "Rainbow Roll", 
      description: "Crab, avocado, cucumber, salmon, tuna, masago", 
      price: 10,
      image: RainbowRoll
    },
    { 
      name: "Sensei Roll", 
      description: "Fried shrimp, avocado, cream cheese, salmon, jalapeno, spicy mayo", 
      price: 9,
      image: SenseiRoll
    },
    { 
      name: "Veggie Roll", 
      description: "Soy paper, avocado, cucumber, carrots, cream cheese, green onions, bell pepper, sesame seeds", 
      price: 7,
      image: 'no image'
    },
    { 
      name: "Spicy Tuna Roll", 
      description: "Spicy Tuna, avocado, cucumber, chili powder", 
      price: 7.50,
      image: SpicyTunaRoll
    },
    { 
      name: "Yari Roll", 
      description: "Soy paper, salmon, crab, avocado, cream cheese, sesame seed", 
      price: 9,
      image: YariRoll
    },
    { 
      name: "Esmer Roll", 
      description: "Soy paper, fried shirmp, spicy tuna, cream cheese, avocado, cucumber, tempura flakes on top", 
      price: 10,
      image: EsmerRoll
    },
    { 
      name: "Caterpillar Roll", 
      description: "Eel, avocado, cucumber, tobiko on top", 
      price: 10.50,
      image: CaterpillarRoll
    },
    { 
      name: "Dragon Roll", 
      description: "crab, cucumber, avocado, eel and tobiko on top", 
      price: 10.50,
      image: DragonRoll
    },
    //... sushi rolls data
  ],
  FriedRoles: [
    { 
      name: "Tierra Roll", 
      description: "Fried rice, fried shrimp, avocado, cream cheese, spicy crab, spicy mayo", 
      price: 9,
      image: TierraRoll
    },
    { 
      name: "Fiji Roll", 
      description: "Crab, cream cheese, avocado, spicy crab on top", 
      price: 9,
      image: FijiRoll
    },
    { 
      name: "Wok Roll", 
      description: "Soy paper, shrimp tempura, cream cheese, avocado, spicy crab on top", 
      price: 9,
      image: 'no image'
    },
  ],
  RicelessRoles: [
    { 
      name: "Acapulco Roll", 
      description: "1 spicy salmon, maki, 3 salmon sashimi, 3 salmon nigiri, cucumber", 
      price: 7.50,
      image: AcapulcoRoll
    },
    { 
      name: "Mares Roll", 
      description: "Salmon, crab, avocado, sesame seeds, sweet vinegar, rolled in cucumber", 
      price: 7.50,
      image: MaresRoll
    },
    { 
      name: "Nila Roll", 
      description: "crab, cucumber, avocado, eel and tobiko on top", 
      price: 10.50,
      image: NilaRoll
    },
  ],
};


export default menuData;