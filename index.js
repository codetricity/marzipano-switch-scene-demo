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

// Create scenes
var scenes = [];
for (let i = 0; i < imageFileNames.length; i++) {
    var scene = viewer.createScene({
        source: Marzipano.ImageUrlSource.fromString(
          `images/${imageFileNames[i]}`
        ),
        geometry: geometry,
        view: view,
      });
    scenes.push(scene);
}

// Display first scene.
scenes[0].switchTo();

// set up buttons to change scenes
const buttons = document.getElementById("buttons");
for (let i = 0; i < scenes.length; i++) {
    var buttonSwitchImage = document.createElement("button");
    buttonSwitchImage.textContent = i + 1;
    buttonSwitchImage.addEventListener('click', function() {
        scenes[i].switchTo();
    })
    buttons.appendChild(buttonSwitchImage);
}
