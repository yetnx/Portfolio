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
    // Add explosion effect
    imageElement.classList.add("explode");

    // Change image after explosion effect
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
      imageElement.classList.remove("explode");

      // Change border color
      const currentColorClass = colors[currentIndex];
      imageContainer.classList.remove(...colors);
      imageContainer.classList.add(currentColorClass);
    }, 500);
  });