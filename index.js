import menuCards from "./templates/menuCard.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");

menuContainer.insertAdjacentHTML("beforeend", menuCards(menu));


  const Switch = document.querySelector("#theme-switch-toggle");
  Switch.addEventListener('change',showSwitch);


  function showSwitch(e){
      if (e.target.checked){
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      } else{
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
  }
  };