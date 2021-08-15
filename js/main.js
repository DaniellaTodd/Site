const panoImage = document.querySelector('.pano-image');
const testPano = 'images/image2.jpeg';

const panorama = new PANOLENS.ImagePanorama(testPano);
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  horizontalView: true,
  // autoRotate: true,
  // autoRotateSpeed: 2,
});

viewer.add(panorama);

// const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info)
// infospot.position.set(-900,-700,-5000)
// // infospot.position.set(0,0,0)
// infospot.addHoverText('Profane Muffling', 40)
// panorama.add(infospot)
