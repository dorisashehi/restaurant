import './style.scss'
import team from './team'

const content = document.getElementById("content");

const getAbout = () => {

    const aboutContent = document.createElement('div');
    aboutContent.innerHTML = `

        <section class="about-section" id="about">

            <div class="container">
                <div class="row">
                    <div class="column-left col-12 col-md-12 col-lg-12 col-xl-6">
                        <p class="section-header animate">About Us</p>
                        <h2 class="animate">Who Are We?</h2>
                        <p class="subheader animate">We are a chain of theme restaurant founded in 1971 in London. In 1979, the cafe began covering its walls with rock and roll memorabilia, a tradition which expanded to others in the chain.</p>
                        <button class="btn btn-primary mt-3 animate" type="submit">Learn More</button>
                        <div class="row flex-wrap team-content mt-5"></div>
                    </div>

                </div>
            </div>
            <div class="soup-image animate"></div>
        <section>

    `;
    content.appendChild(aboutContent);
    showTeam();

}

const showTeam = () => {
    let column = document.createElement("div");

    team.forEach((team) => {

        const teamContainer = document.createElement("div");
        teamContainer.classList.add("col-6","col-md-4","col-lg-4","col-xl-4", "mt-4", "text-center", "animate");

        const teamImage = document.createElement("img");
        teamImage.src = team.image
        teamImage.classList.add("team");

        const teamName = document.createElement("h6");
        teamName.textContent = team.name

        const teamProffesion = document.createElement("p");
        teamProffesion.classList.add("mt-3");
        teamProffesion.textContent = team.profession

        teamContainer.appendChild(teamImage);
        teamContainer.appendChild(teamProffesion);
        teamContainer.appendChild(teamName);

        column.appendChild(teamContainer);

    });

    document.querySelector(".team-content").innerHTML = column.innerHTML;


    /*
    <div class="col-lg-4 mt-4 text-center">
        <img class="team" src="${profile1}"/>
        <h6 class="mt-3">Gordon Ramsey</h6>
        <p>Owner & Founder</p>
    </div>
    */

}

export{getAbout};