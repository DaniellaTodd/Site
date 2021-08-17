const panoImage = document.querySelector('.pano-image');
const img = 'images/image2.jpeg';

const panorama = new PANOLENS.ImagePanorama(img);
panorama.position.set(0,0,1000)
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  horizontalView: true,
  // autoRotate: true,
  // autoRotateSpeed: 2,
});

viewer.add(panorama);

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
function togglePopupTwo(){
  document.getElementById("popup-2").classList.toggle("active");
}

// function playclip() {
// if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
// if (document.all)
//  {
//   document.all.sound.src = "waves.mp3";
//  }
// }
//
// else {
// {
// var audio = document.getElementsByTagName("audio")[0];
// audio.play();
// }
// }
// }

var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
  document.querySelector(".pause-hide").style.display = "block";
  document.querySelector(".play-hide").style.display = "none";
}


function pauseAudio() {
  audio.pause();
  document.querySelector(".pause-hide").style.display = "none";
  document.querySelector(".play-hide").style.display = "block";
}

// const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info)
// infospot.position.set(-900,-700,-5000)
// // infospot.position.set(0,0,0)
// infospot.addHoverText('Profane Muffling', 40)
// panorama.add(infospot)
