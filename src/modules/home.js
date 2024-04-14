import yellowBanner from '../assets/yellow-banner.png'
import plate from '../assets/plate.png'
//import logo from './assets/logo.png';
import menuList from '../menu-list.js'

const content = document.getElementById("content");

const getHeroSection = () => {


    const heroContent =
    `
        <div class="container-fluid hero">
            <div class="hero-image"></div>
            <div class="row">
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
                <div class="col-lg-4 menu-content">
                    <div class="menu-item-content">
                        <h6>BREAKFAST BOWL</h6>
                        <p>Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>EGG SANDWICH</h6>
                        <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>BREAKFAST BURRITO</h6>
                        <p>Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="menu-item-content">
                        <h6>BREAKFAST BOWL</h6>
                        <p>Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>EGG SANDWICH</h6>
                        <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>BREAKFAST BURRITO</h6>
                        <p>Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="menu-item-content">
                        <h6>BREAKFAST BOWL</h6>
                        <p>Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>EGG SANDWICH</h6>
                        <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
                    </div>
                    <div class="menu-item-content">
                        <h6>BREAKFAST BURRITO</h6>
                        <p>Three Scrambled Eggs, Cheddar, our Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
                    </div>
                </div>

            </div>
        </div>
    `;
        content.insertAdjacentHTML('afterbegin',menu);

        //put menu titles
        const menuTitle = menuList.map(item => getTitle(item)).join('');
        document.querySelector('.list').innerHTML = menuTitle;


        //add listener for each title of menu
        // const menuItems = document.querySelectorAll('.item');
        // let tt = [];
        // Array.from(menuItems).map(item => {
        //     item.addEventListener("click", (e) => {
        //         //console.log(e.target.innerText);
        //         tt = menuList.filter(category => {
        //             e.target.innerText.toLowerCase() === category.category
        //             //console.log(category.category.toLowerCase())
        //         });
        //     })
        // });
        // console.log(tt)

}

function getTitle(item){
    return `<li class="item">${item.category}</li>`
}

function getHome(){


    getMenu();
    getHeroSection();

}
export default getHome;