// Import our custom CSS
import './styles/main.scss'

//import '@fortawesome/fontawesome-free/css/all.css';

// import logo from './assets/logo.png';
// const lauImg = document.getElementById('laughImg')
// lauImg.src = logo

import getHome from './Components/Home/index';

const currentPage = "home"

if(currentPage == "home") getHome()


document.querySelector('.open-modal').addEventListener("click", ()=> {
    const dialog = document.getElementById("dialog");
    dialog.showModal();
})