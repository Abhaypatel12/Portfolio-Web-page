const projects = [
  {
    title: "E-commerce Platform",
    description: "Fully functional shopping website with cart and payment features.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "To-Do App with Local Storage",
    description: "Simple app to manage daily tasks using browser's local storage.",
    tech: "HTML, JS, LocalStorage"
  },
  {
    title: "Responsive Blog Site",
    description: "Multi-page blog with responsive layout and article filtering.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Weather Dashboard",
    description: "Fetches live weather data from API and displays city-wise.",
    tech: "HTML, CSS, JS, OpenWeatherMap API"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <small><strong>Tech Used:</strong> ${project.tech}</small>
    `;
    projectList.appendChild(div);
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! Shivam will contact you soon.");
    form.reset();
  });
});