const images = [
  "https://i.pinimg.com/564x/cb/ef/98/cbef98583b5166ab0d9c0ba2902b77a3.jpg",
  "https://i.pinimg.com/564x/54/40/3c/54403c3bb5cf3fedce044d5b593690d0.jpg",
  "https://i.pinimg.com/564x/75/4f/86/754f86d51e37c8bb8d42e7a04f52feec.jpg",
  "https://i.pinimg.com/564x/44/53/6e/44536e47cd13b4b9fd4d1bd2679f7103.jpg",
  "https://i.pinimg.com/564x/be/a5/9f/bea59f571a410a47cd78e513d6b46548.jpg"
];

const colors = ["border-red-500", "border-green-500", "border-blue-500", "border-yellow-500", "border-pink-500"];

let currentIndex = 0;
const imageContainer = document.getElementById("image-container");
const imageElement = document.getElementById("image");

imageContainer.addEventListener("click", () => {
  imageElement.classList.add("explode");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.classList.remove("explode");

    const currentColorClass = colors[currentIndex];
    imageContainer.classList.remove(...colors);
    imageContainer.classList.add(currentColorClass);
  }, 500);
});

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.querySelector('html');
const githubIcon = document.getElementById('github-icon');

const lightModeIcon = "https://framerusercontent.com/images/yDF9b0sgHwVdRnRZcVc8XTPo.webp?scale-down-to=512";
const darkModeIcon = "https://imgs.search.brave.com/X2n57cCMWoGx70py_eznwyk2eN3Nme1S_3vmUbFrm8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi0yMDQ4eDE5/ODgtanp2emNmMnQu/cG5n";

darkModeToggle.addEventListener('click', () => {
html.classList.toggle('dark');

// Change GitHub icon based on dark mode
if (html.classList.contains('dark')) {
githubIcon.src = darkModeIcon;
darkModeToggle.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
`;
} else {
githubIcon.src = lightModeIcon;
darkModeToggle.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;
}
});