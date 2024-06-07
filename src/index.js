// Import our custom CSS
import './styles/main.scss'
import './assets/images/pngfood2.png'
import {eggLoader} from './assets/images/egg.gif';

import getHome from './Components/Home/index';

const currentPage = "home"

if(currentPage == "home") getHome()


// document.querySelector('.open-modal').addEventListener("click", ()=> {
//     const dialog = document.getElementById("dialog");
//     dialog.showModal();
// })