const panoImage = document.querySelector('.pano-image');
const img = 'images/image2.jpeg';

const panorama = new PANOLENS.ImagePanorama(img);
// panorama.position.set(0, 0, -1000)
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  horizontalView: true,
  controlBar: false,
  // initialLookPosition: new THREE.Vector3( -5000.00, 167.06, 3449.90 ),
});

viewer.add(panorama);

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
// function togglePopupTwo(){
//   document.getElementById("popup-2").classList.toggle("active");
// }



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

// const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info)
// infospot.position.set(-900,-700,-5000)
// // infospot.position.set(0,0,0)
// infospot.addHoverText('Profane Muffling', 40)
// panorama.add(infospot)
