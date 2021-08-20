const panoImage = document.querySelector('.pano-image');
const img = 'images/final.jpg';

const panorama = new PANOLENS.ImagePanorama(img);
panorama.position.set(300,0, -1000)
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  horizontalView: true,
  controlBar: false,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  // initialLookPosition: new THREE.Vector3( -5000.00, 167.06, 3449.90 ),
});

viewer.add(panorama);

// Custom infospots
const infospot = new PANOLENS.Infospot( 600,
  'images/infoicon.png', false
)
infospot.position.set(-3950,500,-4000)
infospot.addHoverText('Move Around', 40)
panorama.add(infospot);

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopupTwo(){
  document.getElementById("popup-2").classList.toggle("active");
}

document.getElementById("pauseAudio").addEventListener("click", function(){
  var audio = document.getElementById('altit-audio');
  if(this.className == 'is-paused'){
    this.className = "";
    this.innerHTML = "<img class='sound-icon'src='images/playicon.png' alt='Altitude Above Hygiene' title='Altitude Above Hygiene'/>"
    audio.pause();
  }else{
    this.className = "is-paused";
    this.innerHTML = "<img class='pause-icon'src='images/pauseicon.png' alt='Altitude Above Hygiene' title='Altitude Above Hygiene'/>";
    audio.play();
  }

});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
  document.querySelector(".pause-hide").style.display = "block";
  document.querySelector(".play-hide").style.display = "none";
}

function pauseAudio() {
  var audio = document.getElementById("myAudio");
  audio.pause();
  document.querySelector(".pause-hide").style.display = "none";
  document.querySelector(".play-hide").style.display = "block";
}

// const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info)
// infospot.position.set(-900,-700,-5000)
// // infospot.position.set(0,0,0)
// infospot.addHoverText('Move Around', 40)
// panorama.add(infospot)
