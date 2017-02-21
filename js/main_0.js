var stats, scene, renderer;
var camera;

if(!init()) update();

// init the scene
function init()
{
	if(Detector.webgl)
	{
		renderer = new THREE.WebGLRenderer({
			antialias : true
		});
		renderer.setClearColor(0xf04123, 1);
	}
	else
	{
		Detector.addGetWebGLMessage();
		return true;
	}
	
	var w = window.innerWidth;
	var h = window.innerHeight;

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(w, h);
	document.getElementById('container').appendChild(renderer.domElement);

	stats = new Stats();
	stats.domElement.style.position	= 'absolute';
	stats.domElement.style.bottom = '0px';
	document.body.appendChild(stats.domElement);

	// create an empty scene
	scene = new THREE.Scene();

	// add perspective camera 
	camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 10);
	scene.add(camera);
}

// update loop
function update() 
{
	requestAnimationFrame(update);
	
	// render the scene
	render();

	// update stats
	stats.update();
}

function render() 
{
	renderer.render(scene, camera);
}