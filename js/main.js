const panoImage = document.querySelector('.pano-image');
const testPano - '../images/image2.jpeg';

const panorama = new PANOLENS.ImagePanorama(testPano);
const viewer = new PANOLENS.Viewer({
  container: panoImage

});

viewer.add(panorama);
