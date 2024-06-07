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

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('in-view');
                return;
            }
            //entry.target.classList.remove('in-view');
        })
    });

    const allAnimatedElements = document.querySelectorAll('.animate');
    allAnimatedElements.forEach((element) => {
        observer.observe(element);
    })
})