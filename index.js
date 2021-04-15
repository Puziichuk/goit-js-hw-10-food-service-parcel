import menuCards from "./templates/menuCard.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");

menuContainer.insertAdjacentHTML("beforeend", menuCards(menu));


  const Switch = document.querySelector("#theme-switch-toggle");
  Switch.addEventListener('change',showSwitch);

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  function showSwitch(e){
    e.preventDefault();
      if (e.target.checked){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', Theme.DARK);
      } else{
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', Theme.LIGHT);
      
  }
  };