const github = new Github();
const ui = new UI();

const input_btn = document.getElementById("button_search");
const spinner = document.querySelector(".spinner-border");
const board = document.getElementById("white-board");

input_btn.addEventListener("click", (e) => {
    const user = document.getElementById("input_search").value;
    if (user === "") {
        alert("Please enter a username");
    }
    else {
        spinner.style.display = "unset";
        board.style.display = "unset";
        github.getRepos(user).then(data => {
            if (data.profile.message === "Not Found") {
                alert("User not found");
            }
            else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.showGraph(data.profile);
                setTimeout (() => {
                spinner.style.display = "none";
                board.style.display = "none";
                }, 1000);
            }
        }).catch(err => console.log(err));
        
    }
});