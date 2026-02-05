const images = [
  "/images/monkey1.webp",
  "/images/monkey2.webp",
  "/images/monkey3.jpg",
  "/images/monkey4.webp",
  "/images/monkey5.jpg",
  "/images/monkey6.jpg",
  "/images/monkey7.webp",
  "/images/monkey8.gif",
  "/images/monkey9.jpg",
  "/images/monkey10.gif",
  "/images/monkey10.jpg",
  "/images/monkey11.webp",
  "/images/monkey12.webp"
]

const text = [
  "You promised you wouldn't...",
  "You've been a naughty monkey...",
  "You're a bad, bad monkey...",
  "Gotcha!",
  "Go read an article bro...",
  "What do you think you're doing?"
]
const container = document.getElementById("container"); //insert html element into container

function showImage() {
  console.log("function ran from blocked.js");
  let images_size = images.length;
  let text_size = text.length;

  let rand = Math.floor((Math.random() * 100)) % images_size;
  let rand_text = Math.floor((Math.random() * 100)) % text_size;
  console.log("Random Value is: " + rand);

  let getImg = "";
  getImg += `<img class="blocked-img" src="${images[rand]}">` //blocked img in blocked.css
  getImg += `<p class="monkey-text">${text[rand_text]}</p>`;

  container.innerHTML = getImg
}
showImage()

