const username = 'krizh4'
const projectsContainer = document.getElementById("projects");

async function get_github_repos() {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        console.log(repos);  // Log repos to see what's returned
        if (!Array.isArray(repos)) {
        throw new Error("Unexpected API response format");
        }
        
        // Sort by Date(Recent Projects)
        // repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        // Get only the first 3 repositories
        const firstThreeRepos = repos.slice(0, 3);

        // Map and insert HTML for each repo
        projectsContainer.innerHTML = firstThreeRepos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
          <div class="border-3 m-3 p-3 px-5 rounded-lg hover:scale-105 transition ease-in-out">
            <div id="cover" class="relative">
              <img src="project_cover.jpg" class="w-full h-full object-cover" alt="" srcset="">
              <p class="absolute inset-0 flex justify-start text-white text-lg font-bold pl-5 pt-4">${repo.name}</p>
            </div>
            <h2 class="pt-1 text-xl">${repo.name}</h2>
            <p>${repo.description || '...'}</p>
          </div>
        </a>
        `).join("");
    })
    .catch(error => {
        console.error("Error fetching GitHub repos:", error);
        projectsContainer.innerHTML = "<p>Failed to load projects.</p>";
    });
}

get_github_repos()