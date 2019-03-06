const formulario = document.querySelector("#formulario");
const formularioName = document.querySelector("#formularioName");
const listaFormulario = document.querySelector("#listaFormulario");
// primero las constantes de la vista 1)

// array vacío para guardar la información en el localStorage
let usersArray = []; // array vacío
//
//

// clases 2)

class User {
	constructor(name){
		this.name = name
	}
}

class Interfaz { 
	addUser(user){
		const elemento = document.createElement('div')

		elemento.innerHTML = `
			<div class="alert alert-secondary mt-2" role="alert">
			  ${user.name}
			</div>
		`
		// se crea un elemento y se asigna el nombre del objeto

		listaFormulario.appendChild(elemento)
		// 
	}

	saveDataLocalStorage(usersArray){ //array
		localStorage.setItem('users', JSON.stringify(usersArray));
		// se cambia el array a formato json y se setea  el localhost
	}

	deleteUser(){

	}
	mostrarMensaje(){

	}
}


// eventos 

// formulario
formulario.addEventListener("submit", ejecutarFormulario);

function ejecutarFormulario (e) {
	e.preventDefault();
	// console.log(e)
	// console.log(formularioName.value)
	let name = formularioName.value // cambiar a variable opcional
	
	const user = new User(name) // crear un nuevo usuario, se asigna el texto como  parametro 

	const interfaz = new Interfaz() // se crea un nuevo objeto de interfaz 
	interfaz.addUser(user) //y se asigna el objeto user al parametro addUser
	//console.log(user)


	// localStorage **********
	usersArray.push(user);
	interfaz.saveDataLocalStorage(usersArray)
	//  se pasa el array como parametro


	formulario.reset();
	//console.log(usersArray);
}














// para que cargue la información que esta guardada en el localStorage
// carga todo el html y esto es lo primero que se ejecuta
document.addEventListener('DOMContentLoaded', leerLocalStorage)

function leerLocalStorage(){
	// el array viene con lo que hay en localStorage
	usersArray = JSON.parse(localStorage.getItem("users")); // para volever el texto plano a un array
	// console.log(usersArray)
	if(usersArray === null){
		usersArray = [];
	}else {
		for(let user of usersArray){
			listaFormulario.innerHTML += `
				<div class="alert alert-secondary mt-2" role="alert">
				  ${user.name}
				</div>
			`
		}
	}
}
