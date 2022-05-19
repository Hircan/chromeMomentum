const images = ["1.png", "0.png", "2.png"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

console.log(choosenImage);

const bgImage = document.createElement("img");

bgImage.src = `/img/${choosenImage}`;

console.log(bgImage);

document.body.append(bgImage);
