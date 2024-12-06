// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// Create scene.
var scene1 = viewer.createScene({
  source: Marzipano.ImageUrlSource.fromString(
    "images/room_5_5k.jpeg"
  ),
  geometry: geometry,
  view: view,
});

const scene2 = viewer.createScene({
    source: Marzipano.ImageUrlSource.fromString('images/palo_alto_office_11k.jpeg'),
    geometry: geometry,
    view: view
});

const scene3 = viewer.createScene({
    source: Marzipano.ImageUrlSource.fromString('images/honda-insight.jpeg'),
    geometry: geometry,
    view: view
});

// Display scene.
scene1.switchTo();

// set up button clicks
document.getElementById('image1').addEventListener('click', () => {
    scene1.switchTo();
});

document.getElementById('image2').addEventListener('click', () => {
    scene2.switchTo();
  });

document.getElementById('image3').addEventListener('click', () => {
    scene3.switchTo();
  });