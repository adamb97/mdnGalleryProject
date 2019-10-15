// FROM MOZILLA MDN CHALLENGE

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);



newImage.onclick = function changeSrc(e) {
  var imageSource = e.target.getAttribute('src');
  imageDisplaySet(imageSource);
  }
}

function imageDisplaySet(imageSource){
  displayedImage.setAttribute('src', imageSource);
}
/* Wiring up the Darken/Lighten button */


btn.onclick = function darkToggle() {
  var darkClass = btn.getAttribute('class');

  if (darkClass !== 'dark') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Dark mode';
    overlay.style.backgroundColor = 'rgba(0,0,0, 0.5)';
  } else {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Light Mode'
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}





