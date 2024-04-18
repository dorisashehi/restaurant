import './style.scss'
import team from './team'

const content = document.getElementById("content");

const getAbout = () => {

    const aboutContent = `

        <section class="about-section">
            <div class="soup-image"></div>
            <div class="container">
                <div class="row">
                    <div class="column-left col-lg-6">
                        <div class="row">
                            <p class="section-header">About Us</p>
                            <h2>Who Are We?</h2>
                            <p>We are a chain of theme restaurant founded in 1971 in London. In 1979, the cafe began covering its walls with rock and roll memorabilia, a tradition which expanded to others in the chain.</p>
                            <button class="btn btn-primary mt-3" type="submit">Learn More</button>
                        </div>
                        <div class="row flex-wrap team-content mt-5"></div>
                    </div>

                </div>
            </div>
        <section>

    `;
    content.insertAdjacentHTML('afterbegin',aboutContent);
    showTeam();

}

const showTeam = () => {
    let column = document.createElement("div");

    team.forEach((team) => {

        const teamContainer = document.createElement("div");
        teamContainer.classList.add("col-lg-4", "mt-4", "text-center");

        const teamImage = document.createElement("img");
        teamImage.src = team.image
        teamImage.classList.add("team");

        const teamName = document.createElement("h6");
        teamName.classList.add("mt-3");
        teamName.textContent = team.name

        const teamProffesion = document.createElement("p");
        teamProffesion.textContent = team.profession

        teamContainer.appendChild(teamImage);
        teamContainer.appendChild(teamName);
        teamContainer.appendChild(teamProffesion);
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