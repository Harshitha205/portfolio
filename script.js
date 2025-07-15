// This function is triggered when a user clicks on a project
function showProjectDetails(projectName) {
    alert(`You clicked on the ${projectName} project! More details coming soon.`);
}

// Example: Handling click events for the projects
document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', (event) => {
        const projectName = event.target.querySelector('h3').textContent;
        showProjectDetails(projectName);
    });
});

// Optional: Add smooth scrolling for anchor links (e.g., clicking on "Projects" scrolls down)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
