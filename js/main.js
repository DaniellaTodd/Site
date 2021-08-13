const panoImage = document.querySelector('.pano-image');
const testImg = 'images/pano.jpeg';

const panorama = new PANOLENS.ImagePanorama(testImg);
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  // horizontalView: true,
});

viewer.add(panorama);
