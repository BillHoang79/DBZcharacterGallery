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

	var goku    = new characterSelect('Goku', 200, 30, 25, 30,"http://vignette2.wikia.nocookie.net/fictional-battle-omniverse/images/8/8b/Goku_Dragon_Ball_Z.png/revision/latest?cb=20150508010447")
	var vegeta  = new characterSelect('Vegeta', 200, 35, 20, 30, "http://vignette1.wikia.nocookie.net/vsbattles/images/a/a9/Vegeta.png/revision/latest?cb=20151225064607")
	var cell    = new characterSelect('Cell', 200, 40, 40, 20, "https://lh5.googleusercontent.com/-gYUeDqWEhJ8/U6BoMuqurCI/AAAAAAAAAKE/gJeeugX99W0/w900-h2577/cell___perfect_cell_by_maffo1989-d41e9aj.png")
	var piccolo = new characterSelect('Piccolo', 200, 25, 25, 40, "http://img00.deviantart.net/ab3f/i/2015/230/a/4/piccolo_by_rayzorblade189-d965t1g.png")
	var hit     = new characterSelect('Hit', 200, 20, 40, 40, "http://img03.deviantart.net/79ae/i/2016/101/a/0/hit_5_dbs_by_saodvd-d9ykjd9.png")
	var frieza  = new characterSelect('Frieza', 200, 50, 15, 25, "http://img09.deviantart.net/c5f9/i/2014/197/7/9/frieza_by_dark_crawler-d7qvmil.png")

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

