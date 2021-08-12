const panoImage = document.querySelector('.pano-image');
const img = 'images/pano.jpeg';

const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
  container: panoImage,
  horizontalView: true,
});

viewer.add(panorama);
