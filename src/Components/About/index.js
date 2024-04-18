import './style.scss'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import profile4 from '../../assets/profile4.png'
import profile5 from '../../assets/profile5.png'
import profile6 from '../../assets/profile6.png'

const content = document.getElementById("content");

const getAbout = () => {

    const aboutContent = `
        <section class="about-section py-5">
            <div class="soup-image"></div>
            <div class="container">

                <div class="row">
                    <div class="column-left col-lg-6">
                        <div class="row">
                            <h6>About Us</h6>
                            <h2>Who Are We?</h2>
                            <p>We are a chain of theme restaurant founded in 1971 in London. In 1979, the cafe began covering its walls with rock and roll memorabilia, a tradition which expanded to others in the chain.</p>
                            <button class="btn btn-primary" type="submit">Learn More</button>

                        </div>

                        <div class="row flex-wrap">
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile1}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile2}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile3}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile4}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile5}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                            <div class="col-lg-4 mt-4 text-center">
                                <img class="profile" src="${profile6}"/>
                                <h6 class="mt-3">Gordon Ramsey</h6>
                                <p>Owner & Founder</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <section>

    `;
    content.insertAdjacentHTML('afterbegin',aboutContent);
}


export{getAbout};