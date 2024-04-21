// Import our custom CSS
import './styles/main.scss'

import getHome from './Components/Home/index';

const currentPage = "home"

if(currentPage == "home") getHome()


// document.querySelector('.open-modal').addEventListener("click", ()=> {
//     const dialog = document.getElementById("dialog");
//     dialog.showModal();
// })