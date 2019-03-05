// 1) variables globales

const formularioUI = document.querySelector("#formulario"); //formulario

const listaActividadesUI = document.querySelector("#listaActividades"); // donde se va apintar las nuevas actividades

let ArrayActividades = [] // el array arranca vacío




// console.log(ArrayActividades);

// funciones


const crearItem = (actividad) => { // 2) se crea el objeto y se agregan al ArrayActividades
	let item = { // creando un item estático
		actividad: actividad,
		estado: false
	}

	ArrayActividades.push(item); // agregando el item al array
	
	console.log(ArrayActividades); // mostrando
	
	return item 
}

// let correr = crearItem('correr');
// let nadar = crearItem('nadar');

// console.log(correr);

// console.log(ArrayActividades);



const guardarDB = () =>{ //5) se toma el ArrayActividades y se envía a localStorage
	localStorage.setItem('rutina', JSON.stringify(ArrayActividades)) //guarda en texto pero en formato JSON // muy importante JSON.stringify()

	
	pintarDB(); //parte del 7)  cada vez que guarda se ejecuta el metodo pintarDB
}

 
const pintarDB = () => { //parte del paso 6 arrowFunctions //metodo se jecuta al iniciar app
	listaActividadesUI.innerHTML = ''; // siempre empezarlo vacío , parte de la información que esta en localStorage

	// traer información de lo que hay actualmente en el localStorage getItem rutina
	// convertir el texto plano a json.parse
	ArrayActividades = JSON.parse(localStorage.getItem('rutina'));

	if(ArrayActividades === null){ // si no hay informaqción se asigna un array vacío
		ArrayActividades = [];
	} else{

		// 7) si tiene items activos
		ArrayActividades.forEach(element => { // se hace con un forEach el ciclo
			// console.log(element)
			// popr cada recorrido en el ciclo se agrega el item dentro de listaActividadesUI
			listaActividadesUI.innerHTML += `
				<div class="alert alert-primary">
					<i class="fas fa-angle-double-right fa-2x float-left mr-2"></i>	
					<b>${element.actividad}</b> - ${element.estado} 
					<span class="float-right">
						<i class="fas fa-check"></i>
						<i class="fas fa-trash-alt"></i>
					</span>
				</div>
			`
		//	
		});
	}

	//console.log(ArrayActividades) 

}






//eEventListener

// 3)
formularioUI.addEventListener("submit", (e) =>{ // se captura el evento de submit
	e.preventDefault(); // para que no recargue el navegador
	// console.log('enviando');

	let actividadUi = document.querySelector("#actividad").value; // se coge el valor del input actividad

	// console.log(actividadUi);

	//4) 
	crearItem(actividadUi); //se crea item para nueva actividad
	formularioUI.reset() // borrar los inputs cuando se envíe la información

	guardarDB(); // parte del 5, una vez se guarda se envía el array a loscalStorage

});


//6)
// este evneto se genera cuando el DOM esta cargado
document.addEventListener("DOMContentLoaded", pintarDB);

