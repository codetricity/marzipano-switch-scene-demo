// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// create array of filenames

const imageFileNames = [
    "room_5_5k.jpeg",
    "palo_alto_office_11k.jpeg",
    "honda-insight.jpeg"
];

// Create scene.

var scenes = [];

for (var i = 0; i < imageFileNames.length; i++) {
    var scene = viewer.createScene({
        source: Marzipano.ImageUrlSource.fromString(
          `images/${imageFileNames[i]}`
        ),
        geometry: geometry,
        view: view,
      });
    scenes.push(scene);
}

var scene1 = viewer.createScene({
  source: Marzipano.ImageUrlSource.fromString(
    `images/${imageFileNames[0]}`
  ),
  geometry: geometry,
  view: view,
});

const scene2 = viewer.createScene({
    source: Marzipano.ImageUrlSource.fromString(`images/${imageFileNames[1]}`),
    geometry: geometry,
    view: view
});

const scene3 = viewer.createScene({
    source: Marzipano.ImageUrlSource.fromString(`images/${imageFileNames[2]}`),
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