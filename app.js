	var obtenerTarea = JSON.parse(localStorage.getItem("latarea"));
	//console.log(obtenerTarea[1].tarea);
if (obtenerTarea===null){}
else {
	for (var x = 0; x < obtenerTarea.length; x++) {
			var Ntarea = document.createElement("li");
			var contenido=document.createTextNode("holeei");
			Ntarea.appendChild(contenido);
			var lista=document.getElementById('lista');
			lista.appendChild(Ntarea);
			contenido.textContent = obtenerTarea[x].tarea;
	}
};
	//Aqui se agrega lo almacenado en cada elemento li
			
			
	
var box = document.getElementById("box");
box.value;
var colocar = function (e) {

	if (box.value=="" || box.value=="Agrega una tarea valida..." ) {
		box.value= "Agrega una tarea valida...";
		var error1 = document.getElementById('box');
		error1.setAttribute("class","caja4")
		e.preventDefault();
		var borrar = function () {
			box.value="";
			var error2 = document.getElementById('box');
			error2.setAttribute("class","caja");
		}
		box.addEventListener("focus",borrar);

	} 
	else {

	/*
	var Ntarea = document.createElement("li");
	var contenido=document.createTextNode("holeei");
	Ntarea.appendChild(contenido);
	var lista=document.getElementById('lista');
	lista.appendChild(Ntarea); 
	*/

	//Agregando al localStorage
	var tareaLista= {
		tarea: box.value
	};

	if (localStorage.getItem("latarea")===null){
		var listaT =[];
		listaT.push(tareaLista);
		localStorage.setItem("latarea", JSON.stringify(listaT));
	}
	else {
		var listaT = JSON.parse(localStorage.getItem("latarea"));
		listaT.push(tareaLista);
		localStorage.setItem("latarea",JSON.stringify(listaT));
	}

	var obtenerTarea = JSON.parse(localStorage.getItem("latarea"));
	//console.log(obtenerTarea[1].tarea);

	//Aqui se agrega lo almacenado en cada elemento li
			var Ntarea = document.createElement("li");
			var contenido=document.createTextNode("holeei");
			Ntarea.appendChild(contenido);
			var lista=document.getElementById('lista');
			lista.appendChild(Ntarea);
			
	for (var x = 0; x < obtenerTarea.length; x++) {

			contenido.textContent = obtenerTarea[x].tarea;
	}
	
	//Aqui se agrega la tarea a la lista
	//contenido.textContent = box.value;
	e.preventDefault();
	for (var i = 0; i <= elista.length-1; i++) {
	elista[i].addEventListener("click", holiii);
	};
	box.value="";
	}
};



var agregar = document.getElementById('agregar');

agregar.addEventListener("click",colocar);



var elista = document.getElementsByTagName('li');

var holiii = function () {
	
	this.className="a";	
}		

for (var i = 0; i <= elista.length-1; i++) {
	elista[i].addEventListener("click", holiii);
}

