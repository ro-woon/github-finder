class Github {
    constructor(token) {
        this.client_id = "Iv23liafHXu0QKVlSxbf";
        this.client_secret = "8e0839c5494d8d08200abf0d116af5de0825745a";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getRepos(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}