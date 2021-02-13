var image = document.querySelector('img');
var interval;

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var sourceString = 'http://127.0.0.1:5500/images/Page%20';
var image1String = '1.jpeg';
var image2String = '2.jpeg';
var image3String = '7.jpeg';
var image4String = '8.jpeg';
var image5String = '6.jpeg';

var imageStrings = [image1String, image2String, image3String, image4String, image5String];
console.log(imageStrings);
console.log(image.src);
image.addEventListener('mouseover', (e) => {
  interval = setInterval(() => {
    let imageSelect = randomInt(4);
    e.target.src = sourceString + imageStrings[imageSelect]
    console.log('hovering')
  }, 500)

  e.target.addEventListener('mouseout', (e) => {
    clearInterval(interval);
  })
})