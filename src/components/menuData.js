// Imports for pictures
import CrabPuffs from '../assets/Crabpuffs.png'
import EggRoll from '../assets/sushi-pics/eggrolls.jpg'
import SourSoup from '../assets/chinesefood/hot and sour soup.jpg'
import PankoShrimp from '../assets/chinesefood/panko shrimp.png'
// Salads Imports
import SpicyCrabSalad from '../assets/Salads/spicy crab salad.JPG'
import CalamariSalad from '../assets/Kokito/salads/calamari salad.JPG'
import CrabSunomono from '../assets/Kokito/salads/crab sunomono.jpg'
import CucumberSunomono from '../assets/Kokito/salads/cucumber sunomono.JPG'
import SalmonSunomono from '../assets/Kokito/salads/salmon sunomono.jpg'
import SpicyTunaSalad from '../assets/Kokito/salads/spicty tuna salad.jpg'

// Meal Imports
import ChineeseBox from '../assets/Kokito/chinese food/chinese box.png'
import ChineesePlate from '../assets/Kokito/chinese food/chinese plate.png'
import DeluxChineeseplate from '../assets/Kokito/chinese food/deluxe chinese plate.png'
import KidsBox from '../assets/Kokito/chinese food/kids box.png'

// Entrees Imports
import BroccoliBeef from '../assets/Kokito/chinese food/broccoli beef.jpg'
import PorkRibs from '../assets/Kokito/chinese food/pork ribs.jpg'
import GeneralTsoChicken from '../assets/Kokito/chinese food/general tso shrimp.jpg'
import TeriyakiChicken from '../assets/Kokito/chinese food/teriyaki chicken.jpg'
import SweetSourShrimp from '../assets/Kokito/chinese food/sweet and sour shrimp.jpg'
import SesameChicken from '../assets/Kokito/chinese food/sesame chicken.JPG'
import SweetSourChicken from '../assets/Kokito/chinese food/sweet and sour chicken.JPG'
import GeneralTsoShrimp from '../assets/Kokito/chinese food/general tso shrimp.jpg'
// sides
import FriedRice from '../assets/Kokito/chinese food/side of fried rice.jpg'
import SteamedRice from '../assets/Kokito/chinese food/side of steamed rice.jpg'
import EggNoodle from "../assets/Kokito/chinese food/side of egg noodles.jpg"
import MixedVegetables from "../assets/Kokito/chinese food/side of vegetables.jpg"
//sushi

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
import RubiRull from '../assets/Kokito/sushi/rubi roll.jpg'
import SushiTrayone from '../assets/Kokito/sushi/sushi tray 1.JPG'
import SushiTraytwo from '../assets/Kokito/sushi/sushi tray 2.JPEG'
import SushiTraythree from '../assets/Kokito/sushi/sushi tray 3.JPEG'
import VeggieRoll from '../assets/Kokito/sushi/veggie roll.jpg'
import NigiriSushi from '../assets/Kokito/sushi/nigiri sushi.jpg'
import AlaskanSalmonDish from '../assets/Kokito/sushi/alaskan salmon dish.jpg'
import ToyaTunaDish from '../assets/Kokito/sushi/toya tuna dish.JPEG'

//Bowls
import ChanokBowl from '../assets/Kokito/sushi/chanok bowl.jpg'

// Fried Rolls
import TierraRoll from '../assets/sushi-pics/tierra roll.JPG'
import FijiRoll from '../assets/sushi-pics/fiji-roll.png'
import WokRoll from '../assets/Kokito/sushi/wok roll.jpg'

// Riceless Rolls
import AcapulcoRoll from '../assets/sushi-pics/acapulco roll.jpg'
import MaresRoll from '../assets/sushi-pics/mares roll.JPEG'
import NilaRoll from '../assets/sushi-pics/nila roll.JPG'
//


const menuData = {
  Appetizers: [
    { 
      name: "x3 Crab Puffs", 
      description: "Crab, cream cheese, green onion", 
      price: 3,
      image: CrabPuffs
    },
    { 
      name: "Egg Roll", 
      description: "Classic Egg Roll", 
      price: 1.50,
      image: EggRoll
    },
    { 
      name: "Hot & Sour Soup", 
      description: "Tofu, mushroom, green onion, zucchini, carrot, egg, cabbage", 
      price: 4,
      image: SourSoup
    },
    { 
      name: "x3 Panko Shrimp", 
      description: "Deep fried breaded shrimp", 
      price: 3,
      image: PankoShrimp
    },
    //... more appetizers
  ],
  Salads: [
    { 
      name: "Cucumber Sunomono", 
      description: "Sweet vinegar, cucumber, avocado, sesame seed", 
      price: 4.50,
      image: CucumberSunomono
    },
    { 
      name: "Salmon Sunomono", 
      description: "Fresh salmon, cucumber, sweet vinegar, avocado, sesame seed", 
      price: 5.50,
      image: SalmonSunomono
    },
    { 
      name: "Spicy Crab Salad", 
      description: "Crab, cucumber, sesame seeds, spicy mayo, green onions, spicy mayo, avocado, cream cheese", 
      price: 5.50,
      image: SpicyCrabSalad
    },
    { 
      name: "Calamari Sunomono", 
      description: "Cucumber, calamari, sweet vinegar, avocado sesame seed", 
      price: 5.50,
      image: CalamariSalad
    },
    { 
      name: "Crab Sunomono", 
      description: "Cucumber, crab, sweet vinegar, avocado sesame seed", 
      price: 5.50,
      image: CrabSunomono
    },
    { 
      name: "Spicy Tuna Salad", 
      description: "Cucumber, tuna, carrots, green onion, sweet vinegar, spicy sauce, avocado, sesame seed", 
      price: 5.50,
      image: SpicyTunaSalad
    },
      {
        name: "Spicy Salmon Salad",
        description: "Cucumber, salmon, carrots, green onion, avocado, sesame seeds, spicy sauce"
      },
    //... salads data
  ],
  Meals: [
    { 
      name: "Chineese Box", 
      description: "1 Entree, 1 Side", 
      price: 7.50,
      image: ChineeseBox
    },
    { 
      name: "Chineese Plate", 
      description: "2 Entrees, 1 Side", 
      price: 8.50,
      image: ChineesePlate
    },
    { 
      name: " Delux Chineese Plate", 
      description: "3 Entrees, 1 Side", 
      price: 10,
      image: DeluxChineeseplate
    },
    { 
      name: "Kid's Box", 
      description: "Fried chicken and noodles", 
      price: 5.50,
      image: KidsBox
    },
    //... meals data
  ],
  Entrees: [
    { 
      name: "Broccoli Beef", 
      description: "", 
      price: 0,
      image: BroccoliBeef
    },
    { 
      name: "Pork Ribs", 
      description: "", 
      price: 0,
      image: PorkRibs
    },
    { 
      name: "General Tso Chicken", 
      description: "", 
      price: 0,
      image: GeneralTsoChicken
    },
    { 
      name: "Teriyaki Chicken", 
      description: "", 
      price: 0,
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
      price: 0,
      image: SesameChicken
    },
    { 
      name: "Sweet & Sour Chicken", 
      description: "", 
      price: 0,
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
      price: 3.50,
      image: FriedRice
    },
    { 
      name: "Steamed Rice", 
      description: "", 
      price: 3.50,
      image: SteamedRice
    },
    { 
      name: "Egg Noodles", 
      description: "", 
      price: 3.50,
      image: EggNoodle
    },
    { 
      name: "Mixed Vegetables", 
      description: "", 
      price: 3.50,
      image: MixedVegetables
    },
    //... sides data
  ],
  SushiRolls: [
    { 
      name: "Rubi Roll", 
      description: "Soy paper, avocado, fried shrimp, cream cheese, crab on top", 
      price: 8.50,
      image: RubiRull
    },
   
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
      description: "Fried shrimp, cream cheese, avocado, spicy crab, eel sauce, tempura flakes, coconut flakes", 
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
      description: "Fried crab, cream cheese, avocado, cucumber, chopped calamari", 
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
      name: "Cesarin Roll", 
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
      price: 8,
      image: SpecialRubiRoll
    },
    { 
      name: "Fried Chicken Roll", 
      description: "Chicken tempura, cheam cheese, avocado, tempura flakes, spicy mayo", 
      price: 7,
      image: FriedChickenRoll
    },
    { 
      name: "Guay Roll", 
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
      description: "Crab, avocado, cucumber, salmon, tuna, tobiko", 
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
      description: "Soy paper, avocado, cucumber, lettuce, carrots, cream cheese, green onions, bell pepper, sesame seeds", 
      price: 7,
      image: VeggieRoll
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
      description: "Soy paper, fried shrimp, spicy tuna, cream cheese, avocado, cucumber, tempura flakes on top", 
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
      price: 8,
      image: FijiRoll
    },
    { 
      name: "Wok Roll", 
      description: "Soy paper, shrimp tempura, cream cheese, avocado, spicy crab on top", 
      price: 8,
      image: WokRoll
    },
  ],
  RicelessRoles: [
    { 
      name: "Acapulco Roll", 
      description: "Fried shrimp, cream cheese, avocado, spicy crab, spicy mayo, rolled in cucumber", 
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
      description: "Spicy tuna, crab, avocado, lettuce, mango, rolled in cucumber", 
      price: 7.50,
      image: NilaRoll
    },
  ],
  SpecialtyItems: [
    {
      name: "Nigiri Sushi",
      description: "Tuna, salmon, tobiko, eel",
      price: 1.50, 
      image: NigiriSushi
    },
    {
      name: "Alaskan Salmon Dish",
      description: "1 spicy salmon maki, 3 salmon sashimi, cucumber",
      price: 12, 
      image: AlaskanSalmonDish
    },
    {
      name: "Toya Tuna Dish",
      description: "1 spicy tuna maki, 3 tuna nigiri, 3 tuna sashimi, cucumber",
      price: 12,
      image: ToyaTunaDish

    },
    {
      name: "Tuna Taki",
      description: "10 pieces of shredded tuna, tobiko, green onions, ponzu sauce",
      price: 13, 
      image: TunaTaki

    },
    {
      name: "Chanok Bowl",
      description: "Sushi rice, spicy tuna or spicy salmon, avocado, cucumber, pineapple, carrots, green onions, seaweed, sesame seeds",
      price: 10, 
      image: ChanokBowl
    }
      
    

    
  ],
  SushiTray : [
    { 
      name: "Sushi Tray 1", 
      description: "8 Rolls", 
      price: 80,
      image: SushiTrayone
    },
    { 
      name: "Sushi Tray 2", 
      description: "8 Rolls", 
      price: 80,
      image: SushiTraytwo
    },
    { 
      name: "Sushi Tray 3", 
      description: "8 Rolls", 
      price: 80,
      image: SushiTraythree
    },
  ]
};


export default menuData;