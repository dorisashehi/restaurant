import plate from '../../assets/plate.png'
import { getAbout } from '../About/index.js'
import {getContacts} from '../Contacts/index.js'
import getMenu from '../Menu/index.js'
import '../../assets/yellow-banner.png'
import './style.scss'
import getModal from '../Modal/index.js'

const content = document.getElementById("content");

const getHeroSection = () => {

    const heroContent =`
        <section class="hero-section" id="home">
            <div class="container-fluid hero">
                <div class="hero-image"></div>
                <div class="row hero-content">
                    <div class="column-left col-xl-5 col-lg-4 col-md-4 col-sm-12">
                    <img src=${plate} class="plate"/>
                    </div>
                    <div class="column-right col-xl-7 col-lg-8 col-md-8 col-sm-12">
                        <div class="row">
                            <h1 class="introduction-header">The Spectacle <b>Before Us</b></br>
                                <b>Was Indeed</b> Sublime.
                            </h1>
                            <p class="introduction">
                                Apparently, we had reached a great height in the atmosphere, for the sky was a dead black,
                                and which lifts the horizon of the sea to the level of the spectator on a hillside.
                            </p>
                            <div class="d-flex mt-3 gap-3 introduction-buttons">
                                <button class="btn btn-primary" type="submit">Order Online</button>
                                <button type="button" class="btn btn-outline-primary reservation">Our Location</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `

    content.insertAdjacentHTML('afterbegin',heroContent);

}

const getHome = () =>{
    // getModal()
    getContacts()
    getAbout()
    getMenu();
    getHeroSection();
}
export default getHome