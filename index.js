// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// create array of filenames
const imageFileNames = [
    "stanford.jpeg",
    "carlsbad_1.jpg",
    "carlsbad_2.jpg",
    "room_5_5k.jpeg",
    "palo_alto_office_11k.jpeg",
    "honda-insight.jpeg",
    "audi-car.jpeg"
];

// Create Marzipano scenes and HTML buttons to hold each Marzipano scene
const buttons = document.getElementById("buttons");

for (let i = 0; i < imageFileNames.length; i++) {

    // create an unique Marzipano scene for each image
    let scene = viewer.createScene({
        source: Marzipano.ImageUrlSource.fromString(
          `images/${imageFileNames[i]}`
        ),
        geometry: geometry,
        view: view,
      });
  
    // create HTML button and switch scene when button is clicked  
    let buttonSwitchImage = document.createElement("button");
    buttonSwitchImage.textContent = i + 1;
    buttonSwitchImage.addEventListener('click', function() {
        scene.switchTo();
    })
    buttons.appendChild(buttonSwitchImage);
    // Display first scene.
    if (i == 0) {scene.switchTo()}
}


