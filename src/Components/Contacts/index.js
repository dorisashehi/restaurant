import './style.scss'

const content = document.getElementById("content");

const getContacts = () => {

    const contactsContent = `

        <section class="contacts-section d-flex" id="contacts">
            <div class="green-image"></div>
            <div class="container">
                <div class="row text-center mb-5">
                    <p class="section-header">Location & Timing</p>
                    <h2 class="contact-title">Contact with us</h2>
                </div>
                <div class="row flex-wrap constacts-content">

                    <div class="card-body col-md col-lg-3 p-5">
                        <p class="card-text mb-3">
                            Av. Paz Soldán 290, San Isidro, Lima 27 - Peru
                        </p>
                        <p class="card-text mb-3">
                            +511 442-2777
                        </p>
                        <p class="card-text">
                            mail@restaurantpro.com
                        </p>
                    </div>

                    <div class="card-body col-md col-lg-3 p-5">
                        <p class="card-title">
                            Hours of service
                        </p>
                        <p class="card-subtitle">
                            Monday to Saturday
                        </p>
                        <p class="card-text">
                            1:00 pm - 3:00 pm and
                        </p>
                        <p class="card-text">
                            02:00 pm - 11:00 pm
                        </p>

                        <p class="card-subtitle mt-3">
                            Sunday
                        </p>
                        <p class="card-text">
                            12:30 pm - 3:30 pm
                        </p>
                    </div>

                    <div class="card-body col-md col-lg-3 p-5">
                        <p class="card-title">
                            Telephone support:
                        </p>
                        <p class="card-text">
                            Monday to Saturday from
                        </p>
                        <p class="card-text">
                            9:00 am to 9:00 pm
                        </p>
                        <button class="btn btn-primary mt-5 open-modal" type="submit">Make a reservation</button>
                    </div>
                </div>
            </div>
        <section>

    `;
    content.insertAdjacentHTML('afterbegin',contactsContent);

}


export{getContacts};