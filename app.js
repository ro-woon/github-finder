const github = new Github();
const ui = new UI();

const { L, C} = window._;
const input_btn = document.getElementById("button_search");
const spinner = document.querySelector(".spinner-border");
const board = document.getElementById("main-content");



input_btn.addEventListener("click", (e) => {
    const user = document.getElementById("input_search").value;
    if (user === "") {
        alert("Please enter a username");
    }
    else {
        spinner.style.display = "unset";
        board.classList.remove("fade-in");
        github.getRepos(user).then(data => {
            if (data.profile.message === "Not Found") {
                alert("User not found");
            }
            else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                const img = ui.showGraph(data.profile);
                new Promise((resolve) => {
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve();
                    img.src = img.getAttribute("lazy-src");
                }).then(() => {
                    spinner.style.display = "none";
                    board.classList.add("fade-in");
                });
            }
        }).catch(err => console.log(err));
        
    }
});