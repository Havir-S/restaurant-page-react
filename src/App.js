import React from 'react';
import './scss/mainStyle.scss';
import TopBar from './components/top-bar/top-bar.js';
import SectionMainPicture from './components/section-main-picture/section-main-picture.js';
import SectionNavBar from './components/section-navbar/section-nav-bar.js';
import SectionMainContent from './components/section-main-content/section-main-content.js';

//imgs
import mainImg from './imgs/restaurant1.jpg';
import pizzaImg from './imgs/pizza1.jpg';
import mainDishImg from './imgs/spaghetti.jpg';
import drinkImg from './imgs/coffee-cup.png';
import desertImg from './imgs/cake.png';
import appetiserImg from './imgs/dish.png';

//FoodObj
//In the old version they were all ES6 Class Objects, and it was a good lesson to get my head around,
//but i can't see any reason why would i make it like that here, except to keep it the same as it was before(clunky and quite pointless)
const MEALS = [
  {"name":"margherita","ingredients":"salsa pomodoro,mozzarella,basilico","cost":"16","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"verdure","ingredients":"salsa pomodoro, mozzarella, melanzane, zucchine, peperoni, cippola","cost":"23","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"pancetta","ingredients":"salsa pomodoro, mozzarella, pancetta arrotolata, champignon, parmigiano","cost":"24.50","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"prosciutto e funghi","ingredients":"salsa pomodoro, mozarella, prosciutto cotto, champignon","cost":"21","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"crudo","ingredients":"salsa pomodoro, mozzarella, prosciutto crudo","cost":"22","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"italiana","ingredients":"salsa pomodoro, mozzarella, spinaci, pomodori freschi","cost":"22.50","imgSrc":pizzaImg,"type":"pizzas"},
  {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":mainDishImg,"type":"main dishes"},
  {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":mainDishImg,"type":"main dishes"},
  {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":mainDishImg,"type":"main dishes"},
  {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":mainDishImg,"type":"main dishes"},
  {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":mainDishImg,"type":"main dishes"},
  {"name":"water","ingredients":"","cost":"2","imgSrc":drinkImg,"type":"drinks"},
  {"name":"tea","ingredients":"","cost":"2","imgSrc":drinkImg,"type":"drinks"},
  {"name":"beer","ingredients":"","cost":"5","imgSrc":drinkImg,"type":"drinks"},
  {"name":"coffee","ingredients":"","cost":"3","imgSrc":drinkImg,"type":"drinks"},
  {"name":"wine","ingredients":"","cost":"15","imgSrc":drinkImg,"type":"drinks"},
  {"name":"cheese cake","ingredients":"cheesecake","cost":"4","imgSrc":desertImg,"type":"deserts"},
  {"name":"chocolate cake","ingredients":"cake","cost":"4","imgSrc":desertImg,"type":"deserts"},
  {"name":"cesar salad","ingredients":"","cost":"4","imgSrc":desertImg,"type":"deserts"},
  {"name":"tiramisu con frutta","ingredients":"","cost":"4","imgSrc":desertImg,"type":"deserts"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"},
  {"name":"appetiser","ingredients":"","cost":"5","imgSrc":appetiserImg,"type":"appetisers"}
];
const TYPES = ['drinks','appetisers','main dishes','deserts', 'pizzas'];
const TODAY = new Date();
const MONTHS = [
  {"name":"January","reservedDays":[4,5,2],"eventDays":[7,3],"closed":[11,13]},
  {"name":"February","reservedDays":[6,7,1],"eventDays":[3,15],"closed":[16,17]},
  {"name":"March","reservedDays":[21,22,4],"eventDays":[12,13,14],"closed":[7]},
  {"name":"April","reservedDays":[11,12,13],"eventDays":[8],"closed":[9,30]},
  {"name":"May","reservedDays":[11,12,28],"eventDays":[9,10],"closed":[1,15]},
  {"name":"August","reservedDays":[17,18,21],"eventDays":[20,19],"closed":[5,6]},
  {"name":"June","reservedDays":[18,19,1],"eventDays":[16,17],"closed":[24,28]},
  {"name":"July","reservedDays":[1,2,3,4,5],"eventDays":[25,26,27,28],"closed":[11,12,13]},
  {"name":"September","reservedDays":[15,14,13],"eventDays":[5,6,7],"closed":[16,17]},
  {"name":"October","reservedDays":[16,17,18],"eventDays":[1,2,9],"closed":[7,8]},
  {"name":"November","reservedDays":[22,23,24],"eventDays":[11,17,18],"closed":[5,6]},
  {"name":"December","reservedDays":[11,15,19],"eventDays":[26,27,28],"closed":[3,4]},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'menu'
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(currentTab) {
    this.setState({ currentTab })
  }
  render() {
  return (
    <div className="wrapper">
      <TopBar value='Check out our special events throughout the month!' />
      <SectionMainPicture value='helo' imgSrc={mainImg} />
      <SectionNavBar handleTabChange={this.handleTabChange} />
      <SectionMainContent currentTab={this.state.currentTab}
                          meals={MEALS}
                          mealTypes={TYPES}
                          today={TODAY}
                          months={MONTHS}
                          />
    </div>
  );
}
}

export default App;













// const MEALS = [
//   {"name":"margherita","ingredients":"salsa pomodoro,mozzarella,basilico","cost":"16","imgSrc":"","type":"pizza"},
//   {"name":"verdure","ingredients":"salsa pomodoro, mozzarella, melanzane, zucchine, peperoni, cippola","cost":"23","imgSrc":"","type":"pizza"},
//   {"name":"pancetta","ingredients":"salsa pomodoro, mozzarella, pancetta arrotolata, champignon, parmigiano","cost":"24.50","imgSrc":"","type":"pizza"},
//   {"name":"prosciutto e funghi","ingredients":"salsa pomodoro, mozarella, prosciutto cotto, champignon","cost":"21","imgSrc":"","type":"pizza"},
//   {"name":"crudo","ingredients":"salsa pomodoro, mozzarella, prosciutto crudo","cost":"22","imgSrc":"","type":"pizza"},
//   {"name":"italiana","ingredients":"salsa pomodoro, mozzarella, spinaci, pomodori freschi","cost":"22.50","imgSrc":"","type":"pizza"},
//   {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":"","type":"main"},
//   {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":"","type":"main"},
//   {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":"","type":"main"},
//   {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":"","type":"main"},
//   {"name":"Spaghetti alla Carbonara","ingredients":"spaghetti with porcine - guanciale, yolk and freshly scraped Grana Padano","cost":"21.50","imgSrc":"","type":"main"},
//   {"name":"water","ingredients":"","cost":"2","imgSrc":"","type":"drink"},
//   {"name":"tea","ingredients":"","cost":"2","imgSrc":"","type":"drink"},
//   {"name":"beer","ingredients":"","cost":"5","imgSrc":"","type":"drink"},
//   {"name":"coffee","ingredients":"","cost":"3","imgSrc":"","type":"drink"},
//   {"name":"wine","ingredients":"","cost":"15","imgSrc":"","type":"drink"},
//   {"name":"cheese cake","ingredients":"cheesecake","cost":"4","imgSrc":"","type":"desert"},
//   {"name":"chocolate cake","ingredients":"cake","cost":"4","imgSrc":"","type":"desert"},
//   {"name":"cesar salad","ingredients":"","cost":"4","imgSrc":"","type":"desert"},
//   {"name":"tiramisu con frutta","ingredients":"","cost":"4","imgSrc":"","type":"desert"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"},
//   {"name":"appetiser","ingredients":"","cost":"5","imgSrc":"","type":"appetiser"}
// ];

// MEALS.filter(el => {
//   return el.type === 'pizza';
// })
