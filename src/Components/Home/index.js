import plate from '../../assets/plate.png'
import {putMenuItemListeners} from '../../menu-list.js'
import { getAbout } from '../About/index.js'
import '../../assets/yellow-banner.png'
import './style.scss'

const content = document.getElementById("content");

const getHeroSection = () => {

    const heroContent =`
        <div class="container-fluid hero">
            <div class="hero-image"></div>
            <div class="row min-vh-100">
                <div class="column-left col-lg-5">
                   <img src=${plate} class="plate"/>
                </div>
                <div class="column-right col-lg-7">
                    <div class="row">
                        <h1>The Spectacle <b>Before Us</b></br>
                            <b>Was Indeed</b> Sublime.
                        </h1>
                        <p>
                            Apparently, we had reached a great height in the atmosphere, for the sky was a dead black,
                            and which lifts the horizon of the sea to the level of the spectator on a hillside.
                        </p>
                        <div class="d-flex">
                            <button class="btn btn-primary" type="submit">Order Online</button>
                            <button type="button" class="btn btn-outline-primary reservation">Our Location</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    content.insertAdjacentHTML('afterbegin',heroContent);

}

const getMenu = () => {

    const menu = `
        <div class="container menu">
            <div class="row">
                <div class="menu">
                    <ul class="list d-flex justify-content-center">
                    </ul>
                </div>
            </div>
            <div class="row mt-5">
                <div class="columns-container"></div>
            </div>
        </div>
    `;
    content.insertAdjacentHTML('afterbegin',menu);

    putMenuItemListeners();

}


const getHome = () =>{
    getAbout()
    getMenu();
    getHeroSection();
}
export default getHome