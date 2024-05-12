class UI {
    constructor() {
        this.profile = document.querySelector("#profile-container .inner-content");
        this.others = document.querySelector("#others-container .inner-content");
    }

    showProfile(user) {
        this.profile.innerHTML = `<div id="top-content">
        <div id="user-profile">
            <div class="user-first-info">
                <div class="grid-first-info">
                    <a href="${user.html_url}">
                    <img src="${user.avatar_url}" alt="user-img" id="user_photo">
                    </a>
                    <div class="right-text">
                        <p id="user_name">Name: ${user.login}</p>
                        <p id="user_company">Company: ${user.company}</p>
                        <p id="user_location">Location: ${user.location}</p>
                        <p id="user_member_since">Member Since: ${user.created_at}</p>
                    </div>
                </div>
            </div>
            <div class="stats">
                <div class="grid-stats">
                    <div class="repositories">
                        <p id="repositories">${user.public_repos}</p>
                        <p>Repositorios</p>
                    </div>
                    <div class="followers">
                        <p id="followers">${user.followers}</p>
                        <p>followers</p>
                    </div>
                    <div class="following">
                        <p id="following">${user.following}</p>
                        <p>following</p>
                    </div>
                </div>
            </div>
        </div>
    <div class="lastest-repositories">
                <h3>Latest Repositories</h3>
                <div class="respositories">

                </div>
            </div>
            </div>
            <div id="user-graph">
            </div>`;
    }

    showRepos(repos) {
        let output = "";
        repos.forEach(repo => {
            output += `
            <div class="box-repository">
                <div class="repo-info">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="repo-stats">
                    <span class="repo-stars">Stars: ${repo.stargazers_count}</span>
                    <span class="repo-watchers">Watchers: ${repo.watchers_count}</span>
                    <span class="repo-forks">Forks: ${repo.forks_count}</span>
                </div>
            </div>
            `;
        });
        document.querySelector(".respositories").innerHTML = output;
    }

    showGraph (user) {
        document.getElementById("user-graph").innerHTML = `<img src="https://ghchart.rshah.org/${user.login}" />`;
    }
    
}