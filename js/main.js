
//properties of object
function characterSelect(name, hp, ki, attk, def, image) {
	this.name  = name;
	this.hp    = hp;
	this.ki    = ki;
	this.attk  = attk;
	this.def   = def;
	this.image = image;
}

//new objects going into array
var characterSelectArray = []

	var goku    = new characterSelect('Goku', 200, 30, 25, 30,"img/goku.png")
	var vegeta  = new characterSelect('Vegeta', 200, 35, 20, 30, "img/vegeta.png")
	var cell    = new characterSelect('Cell', 200, 40, 40, 20, "img/cell.png")
	var piccolo = new characterSelect('Piccolo', 200, 25, 25, 40, "img/piccolo.png")
	var hit     = new characterSelect('Hit', 200, 20, 40, 40, "img/hit.png")
	var frieza  = new characterSelect('Frieza', 200, 50, 15, 25, "img/frieza.png")

//adds the new objects into array
characterSelectArray.push(goku, vegeta, cell, piccolo, hit, frieza)

//for loops that goes through array
for( i = 0; i < characterSelectArray.length; i++) {
	var cName = document.createTextNode(characterSelectArray[i].name)
			var cHp = document.createTextNode('HP:' + characterSelectArray[i].hp)
			var cKi = document.createTextNode('KI:' + characterSelectArray[i].ki)
			var cAttk = document.createTextNode('ATTK:' + characterSelectArray[i].attk)
			var cDef = document.createTextNode('DEF:' +   characterSelectArray[i].def)
			var cButton = document.createTextNode('Select')
			var cImage = characterSelectArray[i].image
	//creates new col and puts the values inside elements
	var newCol = document.createElement("div")
			var newDiv = document.createElement("div")
			var nameH1 = document.createElement("h1")
			var hpH4   = document.createElement("h4")
			var kiH4   = document.createElement("h4")
			var attkH4 = document.createElement("h4")
			var DefH4  = document.createElement("h4")
			var button = document.createElement("button")
			var image  = document.createElement("img")
	//attaches the elements to the div
	nameH1.appendChild(cName)
	hpH4.appendChild(cHp)
	kiH4.appendChild(cKi)
	attkH4.appendChild(cAttk)
	DefH4.appendChild(cDef)
	button.appendChild(cButton)

	//attaches button and image
	button.className = "btn btn-primary btn-lg"
	image.src = cImage
	//gives image a class
	image.className = "img-responsive coolImage"

	//creates the process all over again
	newCol.className = "col-sm-4"
	newDiv.className = "characterSelect" + i + "thumbnail"

	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(hpH4)
	newDiv.appendChild(kiH4)
	newDiv.appendChild(attkH4)
	newDiv.appendChild(DefH4)
	newDiv.appendChild(button)

	newCol.appendChild(newDiv)

	document.getElementById("characterSelect").appendChild(newCol)
}

