import {putMenuItemListeners} from '../../menu-list.js';
import './style.scss';

const getMenu = () => {

    const menu = document.createElement('div');

    menu.innerHTML = `

        <section class="menu-section" id="menu">
            <div class="container menu">
                <div class="row text-center mb-5">
                    <p class="section-header">Menu</p>
                    <h2 class="contact-title">Taste Our Foods & Enjoy</h2>
                </div>
                <div class="egg-image"></div>
                <div class="bread-image"></div>
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
        </section>
`;
    content.appendChild(menu);

    putMenuItemListeners();

}

export default getMenu;