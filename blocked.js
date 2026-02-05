const images = [
  "/images/monkey-i-see.gif",
]
const container = document.getElementById("container"); //insert html element into container

function showImage() {
  console.log("function ran from blocked.js");
  let size = images.length;

  let rand = Math.floor((Math.random() * 100)) % size;
  console.log("Random Value is: " + rand);

  let getImg = "";
  getImg += `<img class="blocked-img" src="${images[rand]}">` //blocked img in blocked.css

  container.innerHTML = getImg
}
showImage()

