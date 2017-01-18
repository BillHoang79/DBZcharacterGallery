/* ADDS FALLING DRAGON BALLS, BUT SLOWS DOWN PAGE ALOT SO I WENT WITH A DIFFERENT OPTION */

/*window.onload = function() {

	//get the canvas and context and store in vars
	var canvas = document.getElementById("sky")
	var ctx = canvas.getContext("2d")

	//set canvas dimensions to window height and width
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W
	canvas.height = H

	//generate the snowflakes and apply attributes
	var mf = 100 //max flakes
	var flakes = []

	//loop through the empty flakes and apply attributes
	for(var i = 0; i < mf; i++) {
		flakes.push({
			x: Math.random()*W, //gives X cordinate
			y: Math.random()*H, //gives y cordinate
			r: Math.random()*5+7, //min of 2px and max of 7px
			d: Math.random() + 1 //density of the flake, how fast or slow it falls
		})
	}

	//draw flakes onto canvas
	function drawFlakes() {
		ctx.clearRect(0, 0, W, H) //clears canvas
		ctx.fillStyle = "orange" //draws the shapes in orange
		ctx.beginPath() //tells JS that youre about to draw
		for(var i = 0; i < mf; i++) { //checks to see if there is space for new flakes
			var f = flakes[i]; //grabs number of flakes
			ctx.moveTo(f.x, f.y) //drawing cordinates
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true)//starting point, r is radius, 0 is degrees(this draws full cricle)
		}
		ctx.fill()//fills up drawn circle with color stated above
		moveFlakes()
	}

	//animate the flakes
	var angle = 0

	function moveFlakes(){
		angle += 0.01//moves flakes left and right
		for(var i = 0; 1 < mf; i++) {
			//store current flakes
			var f = flakes[i] 

			//updates X and Y coordinates of each snowflake
			f.y += Math.pow(f.d, 1) + 1//squares the density and adds 1( y cord)
			f.x += Math.sin(angle) * 2 //creates "sway" pattern for Y cords

			//if snowflakes reaches the bottom send new one to the top
			if(f.y > H) {
				flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d}
			}
		}
	}

	setInterval(drawFlakes, 25)

}*/